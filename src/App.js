import React, { useEffect, useRef } from "react";
import { Star } from './util/start' 
import './App.css';

function App() {
  const canvas = useRef(null);
  const stars = [];
  const maxStars = 1100; // 星星数量

  const initCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    console.log(w,h)
    const canvas2 = document.createElement("canvas");
    const ctx2 = canvas2.getContext("2d");
    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, "#CCC");
    gradient2.addColorStop(0.1, "hsl(217, 61%, 33%)");
    gradient2.addColorStop(0.25, "hsl(217, 64%, 6%)");
    gradient2.addColorStop(1, "transparent");
    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();
    for (var i = 1; i < maxStars; i++) {
      const star = new Star({w, h}, ctx, canvas2);
      stars[i] = star;
    }
    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 0.8; //尾巴
      ctx.fillStyle = "hsla(217, 64%, 6%, 2)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      for (let i = 1; i < stars.length; i++) {
        stars[i].draw();
      }

      window.requestAnimationFrame(animation);
    }
    animation();
  }

  useEffect(()=>{
    initCanvas();
  },[]);

  

  return (
    <div className="App">
      <canvas id="canvas" width={ window.innerWidth} height={ window.innerHeight }  ref={canvas}></canvas>
    </div>
  );
}

export default App;
