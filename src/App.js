import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Message} from './Message.js';

function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);
  return (
    <div className="App">
      <h2 className="heading">Counter Simple App</h2>
        {/* <h3>Value Of Counter is : { count }</h3> */}
        <div className={`box ${isMorning ? 'dayLight' : ''}`}>
          <h3> Good {isMorning ? 'Morning' : 'Night'}</h3>
            <Message counter = {count} />
              <button className="countBtn" onClick = { () => setCount(++count) }>
                  Update Counter
              </button>
              <button className="countBtn" onClick = { () => setMorning(!isMorning) }>
                  Update Day
              </button>
        </div>
    </div>
  );
}
export default App;
