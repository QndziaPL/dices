import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";

const DIVIDER_FACTOR_FOR_ROW_HEIGHT = 25;

function App() {
  const [singleRowHeight, setSingleRowHeight] = useState(
    window.innerHeight / DIVIDER_FACTOR_FOR_ROW_HEIGHT
  );
  const [screenWidth, setScreenWidth] = useState(0);
  const updateSizes = () => {
    setSingleRowHeight(window.innerHeight / DIVIDER_FACTOR_FOR_ROW_HEIGHT);
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => {
      window.removeEventListener("resize", updateSizes);
    };
  }, []);
  return (
    <div className="App">
      <Game singleRowHeight={singleRowHeight} screenWidth={screenWidth} />
    </div>
  );
}

export default App;
