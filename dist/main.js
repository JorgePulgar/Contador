(()=>{"use strict";const e=["es-ES",{minimumIntegerDigits:2}];console.log("prueba");let t=new class{constructor(e){this.total=e||600,this.remainingTime=this.total,console.log("New Timer: ",this.total)}start(e){this.interval=setInterval((()=>{this.remainingTime--,0==this.remainingTime&&this.stop(),e(this.remainingTime)}),1e3)}stop(){clearInterval(this.interval)}getMinutes(){return Math.floor(this.remainingTime/60).toLocaleString(...e)}getSeconds(){return(this.remainingTime%60).toLocaleString(...e)}}(12);console.log("minutes: ",t.getMinutes()),console.log("seconds: ",t.getSeconds());const n=document.getElementById("minutes"),i=document.getElementById("seconds"),s=(e,t,n)=>{e.innerHTML=n.getMinutes(),t.innerHTML=n.getSeconds()};s(n,i,t),document.getElementById("startButton").addEventListener("click",(()=>t.start(o)));const o=e=>{s(n,i,t),console.log("time remaining: ",e)},m=document.getElementById("upButton"),r=document.getElementById("downButton"),c=document.getElementById("resetButton");document.getElementById("stopButton").addEventListener("click",(()=>{t.stop()})),r.addEventListener("click",(()=>{(e=>{let t=e.remainingTime%60;e.remainingTime-=t||60})(t),s(n,i,t)})),m.addEventListener("click",(()=>{(e=>{e.remainingTime+=60-e.remainingTime%60,console.log("prueba increase timer")})(t),s(n,i,t)})),c.addEventListener("click",(()=>{(e=>{e.remainingTime=600})(t),s(n,i,t)}))})();