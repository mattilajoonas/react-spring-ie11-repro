import { animated, useSpring } from "@react-spring/web";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const DivWithInterpolation = () => {
  const props = useSpring({
    from: { x: 0 },
    to: { x: 360 },
  });

  return (
    <animated.div
      style={{
        transform: props.x.interpolate((value) => `rotateZ(${value}deg)`),
      }}
    >
      Hello World
    </animated.div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <DivWithInterpolation />
    </div>
  );
}

export default App;
