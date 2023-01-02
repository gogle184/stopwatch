'use strict'

const stopwatch=document.getElementById('stopwatch');
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');

let timerId;
let elapsedMs=0;

function timeToString(millis){
    const ms = millis % 1000;
    const s = Math.floor(millis / 1000) % 10;
    const tenS = Math.floor(millis/10000)%6;
    const m = Math.floor(millis /1000/60) % 60;
    
    const formatedMs = ms.toString().padStart(1,'0');
    const formatedS = s.toString().padStart(1,'0');
    const formatedtenS = tenS.toString().padStart(1,'0');
    const formatedM = m.toString().padStart(1,'0');
    
    return `${formatedM}:${formatedtenS}:${formatedS}:${formatedMs}`;
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
  stopwatch.textContent = '0:0:0:0';
});
