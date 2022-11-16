import React, { useRef, useState } from "react";
import './App.css';
import StarrySky from './components/starrySky'
import BlackHole from "./components/blackHole";
import Main from "./components/main";
import { Context } from "./util/context";

function App() {
  const [status,setStatus] = useState(1);

  const context = {
    status,
    setStatus,
  }

  return (
    <Context.Provider value={context}>
      {status === 1 && <StarrySky />}
      {status === 1 && <BlackHole />}
      {status === 2 &&<Main />}
    </Context.Provider>

  );
}

export default App;
