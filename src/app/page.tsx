/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Image from "next/image";

import { useSpring, animated, to, easings } from "@react-spring/web";

import React, { useMemo } from "react";
import type { CSSProperties } from "react";

interface TransformValues {
  initialRotate: number;
  scaleString: string;
}

// Parses initial rotation and scale from Tailwind className
function getInitialTransform(className = ""): TransformValues {
  let initialRotate = 0;
  let scaleString = "";
  const rotateMatch = className.match(/rotate-\[(\d+)deg\]/);
  if (rotateMatch?.[1]) {
    initialRotate = parseInt(rotateMatch[1], 10);
  }
  let scaleX = 1;
  if (className.includes("scale-x-[-1]")) {
    scaleX = -1;
  }
  // Add more robust parsing for other scale values if needed
  if (scaleX !== 1) {
    scaleString = `scaleX(${scaleX})`;
  }
  return { initialRotate, scaleString };
}

interface SeparatedClasses {
  positionClasses: string;
  otherClasses: string;
}

// Separates positioning classes (absolute, top-, left-, etc.) from others
function separateClasses(className = ""): SeparatedClasses {
  const allClasses: string[] = className.split(" ");
  const positionClasses: string[] = [];
  const otherClasses: string[] = [];
  allClasses.forEach((cls) => {
    if (
      cls.startsWith("absolute") ||
      cls.startsWith("relative") ||
      cls.startsWith("top-") ||
      cls.startsWith("left-") ||
      cls.startsWith("right-") ||
      cls.startsWith("bottom-") ||
      cls.startsWith("inset-") ||
      cls.startsWith("z-")
    ) {
      positionClasses.push(cls);
    } else if (!cls.startsWith("rotate-") && !cls.startsWith("scale-")) {
      // Keep other non-transform, non-position classes
      otherClasses.push(cls);
    }
  });
  return {
    positionClasses: positionClasses.join(" "),
    otherClasses: otherClasses.join(" "),
  };
}

// Animation Configuration
interface AnimationConfig {
  translateYAmount?: number;
  translateXAmount?: number; // Optional, not used in the current implementation
  additionalRotateAmount?: number;
  animationDuration?: number;
}

// Component Props
interface AnimatedImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  animationConfig: AnimationConfig; // Use the defined interface
}

// AnimatedImage Component
const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  width,
  height,
  alt,
  className,
  animationConfig,
}) => {
  // Parse ClassName
  const { positionClasses, otherClasses } = useMemo<SeparatedClasses>(
    () => separateClasses(className),
    [className],
  );
  const { initialRotate, scaleString } = useMemo<TransformValues>(
    () => getInitialTransform(className),
    [className],
  );

  // Animation Config Defaults
  const {
    translateYAmount = 15,
    translateXAmount = 0,
    additionalRotateAmount = 10,
    animationDuration = 3000,
    animationEasing = easings.easeInOutSine, // Default easing function
  } = animationConfig;

  // Spring Setup
  const springs = useSpring({
    from: { y: 0, rot: 0, x: 0 },
    to: {
      y: -translateYAmount,
      rot: additionalRotateAmount,
      x: -translateXAmount,
    },
    config: {
      duration: animationDuration,
      easing: animationEasing,
      tension: 100,
      friction: 1,
      mass: 1,
    },
    loop: { reverse: true },
  });

  // --- Animated Styles Type ---
  // Define the type for the style object used in animated.div
  // Use animated.div's style prop type which accepts AnimatedValue objects
  const animatedStyle: CSSProperties & { transform?: any } = {
    width: width,
    height: height,
    transform: to(
      [springs.y, springs.rot],

      (y, rot) =>
        `translateY(${y}px) rotate(${
          initialRotate + rot
        }deg) ${scaleString}`.trim(),
    ),
    willChange: "transform",
    transformOrigin: "center center",
  };

  return (
    <animated.div
      className={`${positionClasses} ${otherClasses}`.trim()}
      style={animatedStyle} // Apply the typed style object
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="block"
        priority
      />
    </animated.div>
  );
};

const Home: React.FC = () => {
  return (
    <main className="bg-primary text-white ">
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden leading-none tracking-wide">
        <div className="relative flex h-3/4 w-3/5 flex-col items-center justify-center">
          <AnimatedImage
            src="/kiss.png"
            width={100}
            height={100}
            alt="Kiss 1"
            className="pointer-events-none absolute left-40 top-52 rotate-[210deg] scale-x-[-1] "
            animationConfig={{
              translateYAmount: -60,
              additionalRotateAmount: -30,
              animationDuration: 10189,
              animationEasing: easings.easeInOutSine,
            }}
          />
          <AnimatedImage
            src="/kiss.png"
            width={140}
            height={140}
            alt="Kiss 2"
            className="pointer-events-none absolute left-[25rem] top-0 rotate-[30deg]"
            animationConfig={{
              translateYAmount: -33,
              additionalRotateAmount: -53,
              animationDuration: 14418,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={80}
            height={80}
            alt="Kiss 3"
            className="pointer-events-none absolute right-[28rem] top-14 rotate-[135deg] scale-x-[-1]"
            animationConfig={{
              translateYAmount: -100,
              additionalRotateAmount: -250,
              animationDuration: 17313,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={120}
            height={120}
            alt="Kiss 4"
            className="pointer-events-none absolute right-64 top-2 rotate-[340deg] scale-x-[-1]"
            animationConfig={{
              translateYAmount: -42,
              additionalRotateAmount: 33,
              animationDuration: 8738,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={80}
            height={80}
            alt="Kiss 5"
            className="pointer-events-none absolute bottom-48 left-64 rotate-[325deg] scale-x-[-1]"
            animationConfig={{
              translateYAmount: 43,
              additionalRotateAmount: -22,
              animationDuration: 11618,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={120}
            height={120}
            alt="Kiss 6"
            className="pointer-events-none absolute bottom-20 left-[26rem] rotate-[25deg] scale-x-[-1]"
            animationConfig={{
              translateYAmount: -90,
              additionalRotateAmount: 130,
              animationDuration: 14213,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={130}
            height={130}
            alt="Kiss 7"
            className="pointer-events-none absolute bottom-36 right-[19.5rem] rotate-[330deg]"
            animationConfig={{
              translateYAmount: 45,
              additionalRotateAmount: -25,
              animationDuration: 9139,
              animationEasing: easings.easeInOutSine,
            }}
          />

          <AnimatedImage
            src="/kiss.png"
            width={90}
            height={90}
            alt="Kiss 8"
            className="pointer-events-none absolute bottom-[21rem] right-[13rem] rotate-[60deg] scale-x-[-1]"
            animationConfig={{
              translateYAmount: 50,
              additionalRotateAmount: 33,
              animationDuration: 10214,
            }}
          />

          {/* --- Text Content (Unchanged) --- */}
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
          <div
            className="z-10 flex flex-row text-[8rem]"
            style={{ textShadow: "2px 4px 4px #00000099" }}
          >
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
}; // Added closing parenthesis for Home component

// Add default export
export default Home;
