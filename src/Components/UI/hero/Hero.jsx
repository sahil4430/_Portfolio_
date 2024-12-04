"use client";
import React from "react";
import { ContainerScroll } from './container-scroll-animation';
import InerHero from "./Iner_hero";


export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Bringing Ideas to Life Through  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Code and Design
              </span>
            </h1>
          </>
        }>
        {/* <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} /> */}
          <InerHero/>
      </ContainerScroll>
    </div>)
  );
}
