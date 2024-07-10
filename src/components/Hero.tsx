import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/constants";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.load();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.2 });
    gsap.to("#cta", { opacity: 1, delay: 1.2, y: -50 });
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 17 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            ref={videoRef}
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            preload="auto"
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="/" className="btn">
          buy
        </a>
        <p className="font-normal text-xl">
          From $999 or $41.62/mo. for 24 mo.1
        </p>
      </div>
    </section>
  );
};

export default Hero;
