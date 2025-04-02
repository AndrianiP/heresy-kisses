"use client";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="bg-primary text-white ">
      <div className="flex h-screen w-screen flex-col items-center justify-center leading-none tracking-wide">
        <div className="relative flex h-3/4 w-3/5 flex-col items-center justify-center ">
          <Image
            src="/kiss.png"
            width={100}
            height={100}
            className="absolute left-40 top-52 rotate-[210deg] scale-x-[-1]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={140}
            height={140}
            className="absolute left-[25rem] top-4 rotate-[30deg]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={80}
            height={80}
            className="absolute right-[28rem] top-14 rotate-[135deg] scale-x-[-1]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={120}
            height={120}
            className="absolute right-64 top-2 rotate-[340deg] scale-x-[-1]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={80}
            height={80}
            className="absolute bottom-48 left-64 rotate-[325deg] scale-x-[-1]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={120}
            height={120}
            className="absolute bottom-20 left-[26rem] rotate-[25deg] scale-x-[-1]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={130}
            height={130}
            className="absolute bottom-36 right-[19.5rem] rotate-[330deg]"
            alt="Kiss"
          />
          <Image
            src="/kiss.png"
            width={90}
            height={90}
            className="absolute bottom-[21rem] right-[13rem] rotate-[60deg] scale-x-[-1]"
            alt="Kiss"
          />
          <div
            className="z-10 flex flex-row gap-0 text-[15rem] "
            style={{ textShadow: "2px 4px 4px #00000099" }}
          >
            <h1>H</h1>
            <h1>E</h1>
            <h1>R</h1>
            <h1>E</h1>
            <h1>S</h1>
            <h1>Y</h1>
          </div>
          <div className="z-10 flex flex-row text-[8rem]">
            <h1>K</h1>
            <h1>I</h1>
            <h1>S</h1>
            <h1>S</h1>
            <h1>E</h1>
            <h1>S</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
