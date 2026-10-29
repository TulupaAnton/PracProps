import { useEffect, useState } from "react";

export function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    document.title = `Width of Page = ${width}`;
  }, [width]);
  return (
    <div>
      <h2>Width : {width} px</h2>
    </div>
  );
}
