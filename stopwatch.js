'use strict'

const stopwatch=document.getElementById('stopwatch');
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

let timerId;
let elapsedMs=0;

function timeToString(millis){
    const ms = millis % 1000;
    const s = Math.floor(millis / 1000) % 60;
    const m = Math.floor(millis /1000/60) % 60;
    const h = Math.floor(millis/1000/3600)%60;
    
    const formatedMs = ms.toString().padStart(1,'0');
    //桁を10秒単位ではなくミリ、秒、分、時間にしました。1/4
    const formatedS = s.toString().padStart(2,'0');
    const formatedM = m.toString().padStart(2,'0');
    const formatedH = h.toString().padStart(2,'0');
    
    return `${formatedH}:${formatedM}:${formatedS}:${formatedMs}`;
}

start.addEventListener('click',()=>{
  start.disabled= true;
  stop.disabled=false;
  reset.disabled=false;
  
  let startMs = Date.now();
  startMs -=elapsedMs;
  
  timerId = setInterval(()=>{
    const nowMs=Date.now();
    elapsedMs = nowMs-startMs;
    
    stopwatch.textContent = timeToString(elapsedMs);
  },10);
  
  //天才！！！
  
});

stop.addEventListener('click',()=>{
  start.disabled=false;
  stop.disabled=true;
  reset.disabled=false;
  
  clearInterval(timerId);
});

reset.addEventListener('click',()=>{
  start.disabled=false;
  stop.disabled=true;
  reset.disabled=true;
  
  clearInterval(timerId);
  elapsedMs=0;
  stopwatch.textContent = '00:00:00:000';
});
