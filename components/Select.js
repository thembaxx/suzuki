"use client";

import React, {
  useState,
  Children,
  isValidElement,
  useContext,
  createContext,
  useRef,
  cloneElement,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";

import {
  useFloating,
  useInteractions,
  useClick,
  safePolygon,
  useHover,
  useDismiss,
  useListNavigation,
  useTypeahead,
  FloatingOverlay,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
} from "@floating-ui/react-dom-interactions";
import { animated, useSpring } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";

import TextField from "./TextField";
// import Separator from "../separator/Separator";

import { CheckIcon } from "@heroicons/react/24/outline";

const SelectContext = createContext({
  selectedIndex: null,
  setSelectedIndex: null,
  activeIndex: null,
  setActiveIndex: null,
  listRef: null,
  setOpen: null,
  onChange: null,
  getItemProps: null,
  dataRef: null,
});

export const generateChildren = (label, options) => {
  if (!options || options?.length === 0) return [];

  return (
    <OptionGroup key={uuidv4()} label={label}>
      {options?.map(({ label, value }) => (
        <Option key={uuidv4()} value={value}>
          {label}
        </Option>
      ))}
    </OptionGroup>
  );
};

export const usePrevious = (value) => {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const Option = ({ children, index = 0, value }) => {
  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
  } = useContext(SelectContext);

  const handleSelect = () => {
    setSelectedIndex(index);
    onChange(value);
    setOpen(false);
    setActiveIndex(null);
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" ||
      (event.key === " " && !dataRef.current.typing)
    ) {
      event.preventDefault();
      handleSelect();
    }
  };

  return (
    <div
      className="px-3 py-1 flex items-center relative"
      ref={(node) => (listRef.current[index] = node)}
      tabIndex={activeIndex === index ? 0 : 1}
      selected={selectedIndex === index}
      {...getItemProps({
        onClick: handleSelect,
        onKeyDown: handleKeyDown,
      })}
    >
      {selectedIndex === index && (
        <div
          style={{
            background: "#0078D4",
            height: "100%",
            width: 2,
            position: "absolute",
            left: 0,
          }}
        ></div>
      )}
      <div className="flex-grow">{children}</div>
      {selectedIndex === index && (
        <CheckIcon height={16} width={16} color="#006EFF" />
      )}
    </div>
  );
};

export const OptionGroup = ({ children, label }) => {
  return (
    <li className="OptionGroup">
      <div>{label}</div>
      <ul>{children}</ul>
    </li>
  );
};

const Select = ({
  value,
  isDisabled,
  children,
  width,
  filter,
  filterValue,
  render,
  openChange,
  onFilterChange,
  onChange,
}) => {
  const listItemsRef = useRef([]);
  const listContentRef = useRef([
    ...(Children.map(children, (child) =>
      Children.map(
        isValidElement(child) && child.props.children,
        (child) => child.props.value
      )
    ) ?? []),
  ]);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(
    listContentRef.current.indexOf(value) ?? -1
  );
  const [controlledScrolling, setControlledScrolling] = useState(false);

  useEffect(() => {
    const items = Children.map(children, (child) =>
      Children.map(
        isValidElement(child) && child.props.children,
        (child) => child.props.value
      )
    );

    const index = items?.indexOf(value);

    setSelectedIndex(index);
  }, [value, children]);

  useEffect(() => {
    openChange && openChange(open);
  }, [open, openChange]);

  const prevActiveIndex = usePrevious(activeIndex);
  const { x, y, reference, floating, strategy, context, refs } = useFloating({
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    strategy: "absolute",
    middleware: [
      offset(5),
      flip({ padding: "8px 0px" }),
      shift({ padding: "8px 0px" }),
      size({
        apply({ rects, availableHeight, elements }) {
          let menuWidth = width;
          if (menuWidth && !isNaN(menuWidth)) {
            menuWidth = menuWidth + "px";
          }

          Object.assign(elements.floating.style, {
            width: menuWidth ? menuWidth : `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 8,
      }),
    ],
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useClick(context, {
        enabled: !isDisabled,
      }),
      useHover(context, {
        enabled: !isDisabled,
        move: false,
        handleClose: safePolygon(),
      }),
      useDismiss(context),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        selectedIndex,
        onNavigate: setActiveIndex,
        loop: true,
        allowEscape: true,
        virtual: true,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : setSelectedIndex,
        activeIndex,
        selectedIndex,
      }),
    ]
  );

  // Scroll the active or selected item into view when in `controlledScrolling`
  // mode (i.e. arrow key nav).
  const floatingRef = refs.floating;
  useLayoutEffect(() => {
    const floating = floatingRef.current;

    if (open && controlledScrolling && floating) {
      const item =
        activeIndex != null
          ? listItemsRef.current[activeIndex]
          : selectedIndex != null
          ? listItemsRef.current[selectedIndex]
          : null;

      if (item && prevActiveIndex != null) {
        const itemHeight =
          listItemsRef.current[prevActiveIndex]?.offsetHeight ?? 0;

        const floatingHeight = floating.offsetHeight;
        const top = item.offsetTop;
        const bottom = top + itemHeight;

        if (top < floating.scrollTop) {
          floating.scrollTop -= floating.scrollTop - top + 5;
        } else if (bottom > floatingHeight + floating.scrollTop) {
          floating.scrollTop +=
            bottom - floatingHeight - floating.scrollTop + 5;
        }
      }
    }
  }, [
    open,
    controlledScrolling,
    prevActiveIndex,
    activeIndex,
    floatingRef,
    selectedIndex,
  ]);

  // Sync the height and the scrollTop values
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const floating = refs.floating.current;

      if (open && floating && floating.clientHeight < floating.scrollHeight) {
        const item = listItemsRef.current[selectedIndex];
        if (item) {
          floating.scrollTop =
            item.offsetTop - floating.offsetHeight / 2 + item.offsetHeight / 2;
        }
      }
    });
  }, [open, selectedIndex, refs]);

  let optionIndex = 0;

  const options = [
    ...(Children.map(
      children,
      (child) =>
        isValidElement(child) &&
        child.props?.children?.length > 0 &&
        ((
          <ul key={child.props.label} style={{ padding: "4px 0" }}>
            {child.props.label && (
              <div className="text-[10px] uppercase py-2 px-3">
                <p>{child.props.label}</p>
              </div>
            )}
            {Children.map(child.props.children, (child) =>
              cloneElement(child, { index: 1 + optionIndex++ })
            )}
          </ul>
        ) ??
          [])
    ) ?? []),
  ];

  const cx = useCallback(() => {
    if (value) {
      const items = [
        ...(Children.map(children, (child) =>
          Children.map(
            isValidElement(child) && child.props.children,
            (child) => child.props.value
          )
        ) ?? []),
      ];

      if (items) {
        const index = items.indexOf(value);
        if (index !== -1) setSelectedIndex(index + 1);
        else setSelectedIndex(index);
      }
    }
  }, [children, value]);

  useEffect(() => {
    cx();
  }, [cx]);

  // Floating react-spring props
  const floatingProps = useSpring({
    opacity: open ? 1 : 0,
    transform: `scale(${open ? 1 : 0.8})`,

    config: { mass: 2, tension: 500, friction: 40 },
  });

  const hasOptions =
    Children.toArray(children).filter(
      (child) =>
        React.isValidElement(child) && child?.props.children?.length > 0
    )?.length > 0;

  return (
    <SelectContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
        activeIndex,
        setActiveIndex,
        listRef: listItemsRef,
        setOpen,
        onChange,
        getItemProps,
        dataRef: context.dataRef,
      }}
    >
      <div {...getReferenceProps({ ref: reference })}>
        {render(selectedIndex - 1)}
      </div>
      {open && (
        <FloatingOverlay lockScroll style={{ zIndex: 100 }}>
          <animated.div
            {...getFloatingProps({
              ref: floating,
              style: {
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                ...floatingProps,
              },
              onPointerEnter() {
                setControlledScrolling(false);
              },
              onPointerMove() {
                setControlledScrolling(false);
              },
              onKeyDown() {
                setControlledScrolling(true);
              },
            })}
          >
            {filter && (
              <div key="filter_box">
                <div>
                  <TextField
                    placeholder="Filter..."
                    autoFocus={true}
                    value={filterValue}
                    onChange={onFilterChange}
                  />
                </div>
                {/* <Separator /> */}
              </div>
            )}
            <div className="bg-white text-sm shadow-xl">
              {hasOptions ? (
                options
              ) : (
                <div>
                  <p>Nothing to display</p>
                </div>
              )}
            </div>
          </animated.div>
        </FloatingOverlay>
      )}
    </SelectContext.Provider>
  );
};

export default Select;
