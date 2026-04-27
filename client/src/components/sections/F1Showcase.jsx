import { useInView } from "react-intersection-observer";
import { useEffect, useMemo, useRef } from "react";
import * as CountUpModule from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CountUp = CountUpModule.default?.default || CountUpModule.default || CountUpModule;
gsap.registerPlugin(ScrollTrigger);

const F1Showcase = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const streaks = useMemo(() => Array.from({ length: 10 }, (_, i) => i), []);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!inView || !sectionRef.current || !videoRef.current) return undefined;

    const context = gsap.context(() => {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        filter: "brightness(0.75) contrast(1.1) saturate(1.2) blur(0px)",
      });
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, [inView]);

  return (
    <section
      id="f1"
      className="f1-section"
      ref={(node) => {
        ref(node);
        sectionRef.current = node;
      }}
    >
      <div className="f1-video-wrapper">
        {inView && (
          <video
            ref={videoRef}
            src="/assets/videos/f1-cinematic.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="f1-video"
          />
        )}
        <div className="speed-streaks">{streaks.map((i) => <div className="streak" key={i} style={{ top: `${i * 10}%`, animationDelay: `${i * 0.08}s` }} />)}</div>
        <div className="f1-content-overlay">
          <p className="eyebrow">Full-screen motion</p>
          <div className="speed-stat"><span className="speed-number"><CountUp end={340} duration={2} /> km/h</span><span>Inspired by speed, precision, and focus.</span></div>
          <blockquote>"The same precision that wins on track, wins in code."</blockquote>
        </div>
      </div>
    </section>
  );
};

export default F1Showcase;
