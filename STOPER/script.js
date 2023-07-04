const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
const timerTxt=document.querySelector("#timerTxt");
console.log(start,reset,timerTxt)
let time=0
let active=true
const stoper=()=>{
    if(active){
     active=false   
    start.textContent="Pause"
    id=setInterval(timer,10)
    }else{
        active=true
     start.textContent="Start"   
     clearInterval(id)
}

}
const timer=()=>{
    time++
    timerTxt.textContent=(time/100).toFixed(2)
}
const stopStoper=()=>{
    console.log("click")
    clearInterval(id)
    timerTxt.textContent="---"
    time=0
    active=true
    start.textContent="Start"
}
start.addEventListener("click",stoper)
reset.addEventListener("click",stopStoper)