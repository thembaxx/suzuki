"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Accordion = ({ label, isOpen, children, onClick }) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const [open, setOpen] = useState(null);

  const maxHeightCallback = useCallback(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    maxHeightCallback();
  }, [maxHeightCallback]);

  const contentProps = useSpring({
    from: { opacity: "0", maxHeight: "0px" },
    to: {
      opacity: open ? "1" : "0",
      maxHeight: open ? `${maxHeight}px` : "0px",
    },
    config: { mass: 2, tension: 250, friction: 40 },
  });

  const iconProps = useSpring({
    from: { transform: "rotate(0)" },
    to: {
      transform: `rotate(${open ? 180 : 0}deg)`,
    },
    config: { mass: 2, tension: 250, friction: 40 },
  });

  const handleClick = () => {
    console.log("fuck");
    setOpen((prev) => !prev);
    onClick && onClick();
  };

  return (
    <div
      className="border rounded-lg"
      ref={(node) =>
        isOpen &&
        node &&
        node.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      }
    >
      <div
        className="flex items-center justify-between cursor-pointer select-none px-3 py-2"
        onClick={handleClick}
      >
        <h2 className="font-medium text-sm">{label}</h2>
        <div
          style={iconProps}
          className="flex items-center justify-center h-4 w-4"
        >
          <ChevronDownIcon height={16} width={16} />
        </div>
      </div>
      <animated.div
        className={`${!open && "hidden"} px-3`}
        ref={(node) => setMaxHeight(node?.scrollHeight)}
        style={contentProps}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default Accordion;
