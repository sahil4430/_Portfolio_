"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-1 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Milestones in My Journey
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-xl md:text-base max-w-lg">
          From international recognition to unforgettable hackathon memories, here’s how my growth and experiences took shape throughout college.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-black-gradient dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
            position: "absolute",
            left: "2rem", // md:left-8 equivalent
            top: "0",
            overflow: "hidden",
            width: "2px",
            background: "linear-gradient(to bottom, transparent 0%, #e5e7eb 50%, transparent 99%)", // Adjust via-neutral-200 and dark:via-neutral-700
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              position: "absolute",
              inset: "0 auto auto 0", // inset-x-0 top-0 equivalent
              width: "2px",
              height: heightTransform, // Use heightTransform dynamically here
              opacity: opacityTransform, // Use opacityTransform dynamically here
              background: "linear-gradient(to top, #a855f7 0%, #3b82f6 10%, transparent 100%)", // Purple to blue to transparent
              borderRadius: "9999px"
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
