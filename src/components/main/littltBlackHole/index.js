import React, { useContext, useEffect, useRef, useState } from "react";
import './index.css';

function LittleBlackHole() {
  const canvas = useRef(null);
  const elements = 1000; // more the merrier
  const shiftmod = 1/6; // modifier for the x&y distance between each element: DEFAULT=1
  const angle = 37; // degree to rotate the canvas between each element
  const scale =  5; // number of elements that would fit in the available height
  const colorstep = 0.75; // how quickly to adjust the color each frame
  const coloralpha = 0.50; // alpha to render elements in
  const colorcap = 255; // maximum color brightness
  const rotation = 1/10; // how much to rotate the canvas each frame
  const clearScreenAlpha = 0.90; // alpha value for the screen erase each frame
  const zoom = 1.50; // zoom level
  const triheight = 0.10; 
  const alert1 = useRef(null);
  

  function start(){
    init();
    tick();
  }

  const colors = new Array(elements);
  const increments = new Array(elements);
  let size;
  let shift;

  function init(){
    const targetheight = canvas.current.height*zoom; 
    shift = targetheight/elements*shiftmod;
    size = Math.max(1, targetheight/scale);
    
    for( let i = 0; i < elements; i++ ){
      increments[i] = 0;
      colors[i] = Math.round(colorcap - colorcap*i/elements);
    }  
  }

  let framesRendered = 0;

  function draw() {
    setTimeout(()=>{
      if (alert.current?.getContext) {
        const ctx = alert1.current.getContext("2d");
        ctx.fillStyle='red';
        ctx.font = "30px SimSun,Songti SC";
        ctx.fillText('轰隆隆',0,30);
      }
    },2000)
    if (canvas.current?.getContext) {
      const context = canvas.current.getContext("2d");
      context.setTransform(1, 0, 0, 1, 0, 0);
      
      clearCanvas(context);
      
      // set the origin
      context.translate(canvas.current.width/2, canvas.current.height/2);
      
      // rotate the canvas based on the frame
      context.rotate(2 * Math.PI/360 *framesRendered*rotation);
      
      // draw them all
      for( var i = 0; i < elements; i++ )
      {
        if( getRandom(1, 5) === 1 )
        {
           if( increments[i] !== 0 )
            increments[i] = 0;
           else
            increments[i] = getRandom(-1, 1) * colorstep;
        }
        
        colors[i] += increments[i];
        if( colors[i] < 0 )
        {
            colors[i] = 0;
            increments[i] = colorstep;
        }
        else if( colors[i] > colorcap )
        {
            colors[i] = colorcap;
            increments[i] = -colorstep;
        }
        
        context.fillStyle = "rgba(" + 
          Math.floor(colors[i]) + "," +
          Math.floor(colors[i]) + "," +
          "0, " + coloralpha + ")";
        
        context.rotate(2 * Math.PI/360 * angle);
        
        context.beginPath();
        context.moveTo(i*shift - size/2, size*triheight + i*shift);
        context.lineTo(i*shift, i*shift);
        context.lineTo(i*shift + size/2, size*triheight + i*shift);
        context.closePath();
        context.fill();
      }
      
      framesRendered++;
    }
  }

  function tick(){
      // draw a frame
      draw();
      
      // trigger the timer for the next frame...
      window.requestAnimationFrame(tick);
  }

  function clearCanvas(context){
    context.fillStyle = "rgba(0, 0, 0, " + clearScreenAlpha + " )";
    context.fillRect (0, 0, canvas.width, canvas.height);
  }

  function getRandom (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }


  useEffect(()=>{
    start();
  },[]);

  

  return (
    <div>
      <canvas id="littleBlackHole" width={ 200 } height={ 200 }  ref={canvas}></canvas>
      <canvas id="alert1" width={ 500 } height={ 200 }  ref={alert1} ></canvas>
    </div>
  );
}

export default LittleBlackHole;