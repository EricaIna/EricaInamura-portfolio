import { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children, move }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sr = scrollReveal();
    if (sectionRef.current) {
      sr.reveal(sectionRef.current, {
        reset: true,
        delay: 500,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "40px",
      });
    }
  }, [move]);

  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollReveal;
