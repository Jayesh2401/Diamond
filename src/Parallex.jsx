import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Parallex.css";

function Parallex() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      css: {
        filter: "hue-rotate(160deg)",
      },
    });
  }, []);

  return (
    <>
      <section className="container">
        <div className="contain">
          {/* <img src="sun.png" alt="Sun" className="sun-image" /> */}
          {/* <img src="mooon.png" alt="Moon" className="moon-image" /> */}
        </div>
      </section>
    </>
  );
}

export default Parallex;
