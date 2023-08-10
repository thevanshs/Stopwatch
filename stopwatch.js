const timedisplay=document.querySelector("#timedisplay");
const startbtn=document.querySelector("#startbtn");
const pausebtn=document.querySelector("#pausebtn");
const resetbtn=document.querySelector("#resetbtn");

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let paused=true;
let intervalid;
let hrs=0;
let min=0;
let secs=0;
let mili=0;


startbtn.addEventListener("click",()=>{
    if(paused){
        paused = false;
        starttime = Date.now() -elapsedtime;
        intervalid=setInterval(updatetime,1);
    }
});
pausebtn.addEventListener("click",()=>{
    if(!paused)
    {
        paused=true;
        elapsedtime=Date.now()-starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener("click",()=>{
    if(paused||!paused)
    {
        paused=true;
        clearInterval(intervalid);
         starttime=0;
         elapsedtime=0;
         currenttime=0;
         hrs=0;
         min=0;
         secs=0;
         mili=0;
        timedisplay.textContent="00:00:00:000";
    }
});


function updatetime(){
    elapsedtime=Date.now() -starttime;

    mili=Math.floor(elapsedtime)%60;
    secs=Math.floor((elapsedtime/1000)%60);
    min=Math.floor((elapsedtime/(1000*60))%60);
    hrs=Math.floor((elapsedtime/(1000*60*60))%60);

    // if(secs<10)
    // {
    //     secs="0"+secs;
    // }
    // if(hrs<10)
    // {
    //     hrs="0"+hrs;
    // }
    // if(min<10)
    // {
    //     min="0"+min;
    // }
    mili=padd(mili);
    secs=pad(secs);
    min=pad(min);
    hrs=pad(hrs);

    timedisplay.textContent=`${hrs}:${min}:${secs}:${mili}`

    function pad(unit){
        return (("0")+unit).length>2 ? unit : "0"+unit;
    }
    function padd(unit)
    {
        return (("0")+unit).length>2 ? unit+"0" : "0"+"0"+unit;
    }
}