// App.js
import React from "react";
import "./style.css";
import TimeChcker from "./components/TimeChecker";

const App = () => {
  return (
    <div className="app">
      <h1>schedule-maker</h1>
      <TimeChcker />
    </div>
  );
};

export default App;
