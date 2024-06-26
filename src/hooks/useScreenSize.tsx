import { useState, useEffect } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("xl");

  useEffect(() => {
    function getScreenSize(): ScreenSize {
      if (window.innerWidth < 640) return "xs";
      else if (window.innerWidth < 768) return "sm";
      else if (window.innerWidth < 1024) return "md";
      else if (window.innerWidth < 1280) return "lg";
      else if (window.innerWidth < 1536) return "xl";

      return "2xl";
    }

    function handleResize() {
      setScreenSize(getScreenSize());
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
