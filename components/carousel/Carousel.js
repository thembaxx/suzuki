"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const Carousel = ({ items }) => {
  const containerRef = useRef(null);
  const containerWidth = useRef(0);
  const carouselScrollWidth = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const transform = useRef(0);
  const [translateX, setTranslateX] = useState(0);

  //   ResizeObserver to handle width change.
  const handleResizeObserver = useCallback((entries) => {
    const entry = entries[0];
    let width;

    if (entry.contentBoxSize) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize;

      width = contentBoxSize.inlineSize;
    } else {
      width = entry.contentRect.width;
    }

    containerWidth.current = width;
    carouselScrollWidth.current = containerRef.current.scrollWidth;
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(handleResizeObserver);
    observer.observe(containerRef?.current);

    // const bars = new Array(items.length).fill(0);
    // setScrollBars(bars);
  }, [handleResizeObserver, items?.length]);

  const indexChangeHandler = (index) => {
    const scrollBy = (containerWidth.current * containerRef.current) / 100;

    transform.current = scrollBy * index;
    console.log(transform.current);

    setTransform(transform.current);
  };

  const setTransform = (value) => {
    setTranslateX(value);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div ref={containerRef} className="flex overflow-x-auto mb-2">
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`w-[360px] aspect-w-2 aspect-h-1 bg-gray-200  relative rounded-t-xl overflow-hidden md:rounded-none`}
            >
              <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
            </div>
          );
        })}
      </div>
      <div className="flex w-full gap-2 px-2">
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`${
                activeIndex === i && "outline"
              } outline-blue-700 cursor-pointer`}
              onClick={() => {
                setActiveIndex(i);
                indexChangeHandler(i);
              }}
            >
              <Image
                src={img}
                alt=""
                width={128}
                height={40}
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
