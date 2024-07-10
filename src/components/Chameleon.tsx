import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cameraImg } from "../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const Chameleon = () => {
  useEffect(() => {
    gsap.from(".camera-img", {
      y: 100,
      scale: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".camera-img",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="chameleon-title">
            A camera that captures your wildest imagination.
          </h2>

          <p className="chameleon-subtitle">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={cameraImg}
                alt="cameraImg"
                className="camera-img bg-transparent relative z-10"
              />
            </div>
          </div>
          <p className="text-gray font-semibold text-left mt-3 text-xl">
            A green iguana, captured by the 48MP Main camera
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chameleon;
