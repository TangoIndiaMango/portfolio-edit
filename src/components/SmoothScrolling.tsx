import ReactLenis from "lenis/react";
import { ReactNode } from "react";

const SmoothScrolling = (children: ReactNode) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
