import React, { useEffect, useRef, useState } from "react";
import './index.css';
import we from './we.png';
import { showText } from "../../util/showText";
import dream1 from './dream1.png';
import dream2 from './dream2.png';
import LittleBlackHole from "./littltBlackHole";
import Fireworks from "./fireworks";
import happyBirthday from './happy-birthday.jpeg';

function Main() {
  

  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [text3,setText3] = useState('');
  const [text4,setText4] = useState('');
  const [text5,setText5] = useState('');
  const [time,setTime] = useState(0);
  const star = useRef(null);

  // 星星效果
function Star(type) {
  this.speed = 1;
  this.star = document.createElement('div');
  this.star.className = type === 'star' ? 'star' : 'moon';
  this.star.style.top = '0px';
  this.star.style.left = Math.random() * window.innerWidth + 1 + 'px';
  document.body.appendChild(this.star);
}
Star.prototype.down = function () {
  const that = this;
  function move() {
    that.star.style.top = that.star.offsetTop + that.speed + 'px';
    if (that.star.offsetTop > window.innerHeight) {
      clearInterval(timer);
      document.body.removeChild(that.star);
    }
  }
  var timer = setInterval(move, 25);
}


  useEffect(()=>{
    console.log(time);
    document.title = '梦境';
    if (time === 0) {
      showText(setText3,"在一起后宝贝的第一个生日就没有办法和宝贝一起过，异地真的好讨厌啊。ε=(´ο｀*)))唉……之前也幻想过不异地的话这天要怎么度过……",setTime)
    } else if (time === 1) {
      showText(setText1,"男孩女孩手拉手走到江畔，或者海边，吹着风，随着一声炸裂的声响，烟花在天空中绽放，女孩望着烟花入了神，男孩望着女孩出了神，五彩斑斓的光映射在女生的眼眸，像极了他们绚烂的未来，多么浪漫。",setTime)
    } else if (time === 2) {
      showText(setText2,"男孩挽着女孩的手漫步于星空下，仰首是星光灿烂，俯首是挽着的双手与乡间小路，驻足远眺，天空与苍茫大地连接，星河一路延伸直至尽头……",setTime);
    } else if (time === 3) {
      showText(setText4,"ε=(´ο｀*)))唉……要是可以穿越时空就好啦！",setTime);
    }
    else if (time === 4) {
      star.current = setInterval(() => {
        new Star('star').down();
      }, 100)
      setTimeout(()=>{
        setTime(pre=>pre+1);
      },20000)
    } else if (time === 5) {
      clearInterval(star.current);
      let audio = document.getElementById("audio");
      audio.src = null;
      let audio1 = document.getElementById("audio1");
      audio1.play();
      
      document.title = '宝贝生日快乐！';
      showText(setText5,"流水今日  明月前身  不念不惧  永葆天真",null);
    }
    
  },[time])



  return (
    <div >
      {time === 1 && <div id="dream1">
        <p id="text1">
        {text1}
        </p>
        <img src={dream1} alt="烟花" id="img1"/>
      </div>}
      {time === 2 && <div id="dream2">
        <p id="text2">{text2}</ p>
        <img src={dream2} alt="星空" id="img2"/>
      </div>}
      {(time === 0 || time === 3 || time === 4) && 
      <div className="container">
        <div className="land" ></div>
        {(time === 0 || time === 3) && <div className="man">
          {(time === 0) && <p id="text3">{text3}</p>}
          {(time === 3) && <p id="text4">{text4}</p>}
          <div className="head1"></div>
          <div className="body1"></div>
          <div className="feet1"></div>
        </div>}
        {time === 3 && <LittleBlackHole />}
       {time === 4 && <img src={we} id="we" alt="lqt and sq"/>}
      </div>}
      {time === 4 && <Fireworks />}
      {time === 5 && <div id="happy-birthday">
        <p id="text5">
        {text5}
        </p>
        <img src={happyBirthday} alt="生日快乐" id="img3"/>
      </div>}
    </div>
  )
}

export default Main;