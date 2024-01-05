const startBtnTag = document.getElementsByClassName('startBtn')[0];
const pauseBtnTag = document.getElementsByClassName('pauseBtn')[0];
const continueBtnTag = document.getElementsByClassName('continueBtn')[0];
const restartBtnTag = document.getElementsByClassName('restartBtn')[0];

const stopWatchTag = document.getElementsByClassName('stopWatch')[0];

let hours=0,
    minutes=0
    seconds=0;


const startTimer= () => {
  seconds++;
  console.log(seconds);
  if(seconds == 60 ){
    minutes++;
    seconds = 0;
    if(minutes == 60){
      hours++;
      minutes =0;
    }
  }

const secondText = seconds<10?"0"+seconds.toString():seconds;
const minuteText = minutes<10?"0"+minutes.toString():minutes;
const hourText = hours<10?"0"+hours.toString():hours;
stopWatchTag.textContent=hourText+":"+minuteText+":"+secondText;
};
let intervalId ;
const startAndRestart =() =>{
  clearInterval(intervalId);
  hours=0,minutes=0,seconds=0;
  intervalId = setInterval(startTimer,1000)
}
startBtnTag.addEventListener('click',() =>{
  startAndRestart();

});
pauseBtnTag.addEventListener('click',()=>{
  clearInterval(intervalId);
});
continueBtnTag.addEventListener('click',()=>{
  clearInterval(intervalId);
  intervalId = setInterval(startTimer,1000);
});
restartBtnTag.addEventListener('click',()=>{
  startAndRestart();
});
  

