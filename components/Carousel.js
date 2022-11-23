"use client";
// @refresh reset
import { useState, useRef, useCallback, useEffect } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ImageX from "./ImageX";

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

  return (
    <div ref={containerRef} className="flex flex-col overflow-hidden">
      <div
        className={`flex transform-gpu transition duration-500 ease-in-out`}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`bg-gray-100 aspect-w-2 aspect-h-1 w-full w-[${containerWidth}px] flex-shrink-0`}
            >
              {/* <Image src={img} alt="" fill style={{ objectFit: "cover" }} /> */}
              <ImageX src={img} />
            </div>
          );
        })}
      </div>

      <div className="bg-gray-100 flex w-full gap-2 px-3 py-3 overflow-x-auto carousel-list">
        {items?.map((img, i) => {
          return (
            <div
              key={i}
              className={`bg-gray-200 flex-shrink-0 ${
                activeIndex === i && "outline"
              } outline-blue-700 cursor-pointer`}
              onClick={() => {
                setActiveIndex(i);
                indexChangeHandler(i);
              }}
            >
              <ImageX
                src={img}
                // alt=""
                width={128}
                height={64}
                // style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between relative px-3">
        <div className="flex gap-1 text-[10px]">
          <span>{activeIndex + 1}</span>
          <span>/</span>
          <span>{items?.length}</span>
        </div>
        <div className="absolute left-[50%] translate-x-1/2 translate-y-1/2"></div>
        <div className="flex">
          <button className="h-6 w-6 flex items-center justify-center">
            <ChevronLeftIcon height={16} width={16} />
          </button>
          <button className="h-6 w-6 flex items-center justify-center">
            <ChevronRightIcon height={16} width={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
