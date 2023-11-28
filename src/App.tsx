// App.js
import React from 'react';
import './style.css';
import DayColumn from './components/DayColumn';

function App() {
  return (
    <div className="app">
      <h1>Time-Checker</h1>
      <DayColumn />
    </div>
  );
}

export default App;
