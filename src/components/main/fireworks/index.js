import React, { useEffect, useRef } from "react";
import './index.css';
import HanziWriter from 'hanzi-writer';

function Fireworks() {

  // 文字效果
const BASE_CONFIG = {
  width: 100,
  height: 100,
  padding: 5,
  delayBetweenStrokes: 0,
  strokeAnimationSpeed: 1.2,
  showCharacter: false,
  showOutline: false,
}
const WRITER_CONFIG = {
  ...BASE_CONFIG,
  strokeColor: '#e09037'
};

const NAME_CONFIG = {
  ...BASE_CONFIG,
  strokeColor: '#87db92'
};

const getWriterList = () => {
  let writerList = [];
  writerList.push(HanziWriter.create('sheng', '生', WRITER_CONFIG));
  writerList.push(HanziWriter.create('ri', '日', WRITER_CONFIG));
  writerList.push(HanziWriter.create('kuai', '快', WRITER_CONFIG));
  writerList.push(HanziWriter.create('le', '乐', WRITER_CONFIG));
  writerList.push(HanziWriter.create('ya', '吖', WRITER_CONFIG));
  writerList.push(HanziWriter.create('su', '苏', NAME_CONFIG));
  writerList.push(HanziWriter.create('xiao', '小', NAME_CONFIG));
  writerList.push(HanziWriter.create('qing', '情', NAME_CONFIG));
  return writerList;
}

const generateAnimateWriter = async (writerList) => {
  const writerCount = writerList.length;
  for (const writer of writerList) {
    await writer.animateCharacter();
  }
  // 文字全都显示完全后消失掉
  // setTimeout(()=>{
  //   document.getElementsByClassName('happy-birthday__container')[0].style.opacity = 0;
  // },5000);
}






 








    
  

    useEffect(()=>{
      const writerList = getWriterList();
    generateAnimateWriter(writerList);
    },[]);






  return (
    <div>
      <div className="happy-birthday__container">
        <div id="sheng"></div>
        <div id="ri"></div>
        <div id="kuai"></div>
        <div id="le"></div>
        <div id="ya"></div>
        <div id="site"></div>
        <div id="su"></div>
        <div id="xiao"></div>
        <div id="qing"></div>
      </div>
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </div>
  )
}

export default Fireworks;