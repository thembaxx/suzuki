"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const Carousel = ({ items }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselScrollWidth = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const transform = useRef(0);
  const [translateX, setTranslateX] = useState(0);

  // ResizeObserver to handle width change.
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

    //console.log(width);
    setContainerWidth(width);
    carouselScrollWidth.current = containerRef.current?.scrollWidth;
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(handleResizeObserver);
      observer.observe(containerRef?.current);
    }

    // const bars = new Array(items.length).fill(0);
    // setScrollBars(bars);
  }, [handleResizeObserver, items?.length]);

  const indexChangeHandler = (index) => {
    transform.current = containerWidth * index;

    setTranslateX(transform.current * -1);
  };

  console.log(containerWidth);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div
        className={`flex w-full mb-2 transform-gpu transition duration-500 ease-in-out`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`bg-gray-100 aspect-w-2 aspect-h-1 w-[${containerWidth}px] flex-shrink-0`}
            >
              <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
            </div>
          );
        })}
      </div>

      <div className="flex w-full gap-2 px-2 py-2 overflow-hidden">
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`flex-shrink-0 ${
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
                height={64}
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
