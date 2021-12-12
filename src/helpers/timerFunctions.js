/* eslint-disable */
// this file contains the logic for the pomodoro timer. 

// NOTE: need to convert the mminutes entered by user into milliseconds (min * 60 * 1000)

// startTimer is called twice in each cycle (one for focus time and one for break time)
function startTimer(secondsToCount) {

  return new Promise(resolve => {
    let seconds = 0;

    const intervalCallback = () => {
      seconds ++;
      console.log('seconds: ', seconds);

      if (seconds === secondsToCount) {
        console.log('timer done!');
        clearInterval(intervalFunc);
        resolve('resolved');
      }
    }
  
    const intervalFunc = setInterval(intervalCallback, 1000);
    // return seconds;
  })
  
};


// startSession loops through the number of cycles, calling startTimer
async function startSession(focusSec, breakSec, cycles) {

  // loop through the number of cycles
  let currentCycle = 1;
  while (currentCycle <= cycles) {
     console.log('start of cycle ' + currentCycle);
     await startTimer(focusSec);
     await startTimer(breakSec);
     currentCycle ++;
  }
  console.log('timer finished');
};




module.exports = {startSession};