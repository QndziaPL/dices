import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";

const DIVIDER_FACTOR_FOR_ROW_HEIGHT = 25;

function App() {
  const [singleRowHeight, setSingleRowHeight] = useState(
    window.innerHeight / DIVIDER_FACTOR_FOR_ROW_HEIGHT
  );
  console.log(singleRowHeight, "tuta height");
  const updateSingleRowHeight = () => {
    setSingleRowHeight(window.innerHeight / DIVIDER_FACTOR_FOR_ROW_HEIGHT);
  };
  useEffect(() => {
    window.addEventListener("resize", updateSingleRowHeight);
    return () => {
      window.removeEventListener("resize", updateSingleRowHeight);
    };
  }, []);
  return (
    <div className="App">
      <Game singleRowHeight={singleRowHeight} />
    </div>
  );
}

export default App;
