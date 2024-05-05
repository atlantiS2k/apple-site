/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
interface AnimationProps {
  [key: string]: any;
}

interface ScrollProps {
  trigger?: string | Element | null;
  toggleActions?: string;
  start?: string | number;
  [key: string]: any;
}

export const animateWithGsap = (
  target: string | Element | null,
  animationProps: AnimationProps,
  scrollProps: ScrollProps
): GSAPTween => {
  return gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: GSAPTimeline,
  rotationRef: React.MutableRefObject<any>,
  rotationState: number,
  firstTarget: string | Element | null,
  secondTarget: string | Element | null,
  animationProps: AnimationProps
): GSAPTimeline => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  return timeline;
};
