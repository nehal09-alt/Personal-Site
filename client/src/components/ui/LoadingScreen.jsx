import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 5;
      });
    }, 55);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={`loading-screen ${progress === 100 ? "done" : ""}`}>
      <h1>NEHAL // AI ML</h1>
      <div className="loader-bar"><span style={{ width: `${progress}%` }} /></div>
    </div>
  );
};

export default LoadingScreen;
