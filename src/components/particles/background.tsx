"use client";

import { useTheme } from "next-themes";
import Particles from "./Particles";

export const Background = () => {
  const { theme } = useTheme();

  const particleColors =
    theme === "dark"
      ? ["#ffffff", "#e0e0e0", "#a0a0a0", "#c0c0c0"]
      : ["#000000", "#222222", "#444444", "#666666"];

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        particleCount={250}
        particleSpread={12}
        speed={0.05}
        particleColors={particleColors}
        moveParticlesOnHover={true}
        particleHoverFactor={3}
        alphaParticles={true}
        particleBaseSize={120}
        sizeRandomness={1}
        cameraDistance={50}
        disableRotation={false}
        pixelRatio={
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
        }
      />
    </div>
  );
};
