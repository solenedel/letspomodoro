/* eslint-disable */
// this file contains the logic for the pomodoro timer. 

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


// startSession is invoked in the onClick handler of the START button
startSession(5, 2, 3);
