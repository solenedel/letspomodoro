/* eslint-disable */


async function startTimer(secondsToCount) {
  let seconds = 0;

  const intervalCallback = () => {
    seconds ++;
    console.log('seconds: ', seconds);

    if (seconds === secondsToCount) {
      console.log('timer done!');
      clearInterval(intervalFunc);
    }
  }
  
  const intervalFunc = setInterval(intervalCallback, 1000);
  return seconds;
};

function startSession(focusSec, breakSec, cycles) {

  // loop through the number of cycles
  let currentCycle = 1;
  while (currentCycle <= cycles) {
     console.log('start of cycle ' + currentCycle);
     startTimer(focusSec).then(() => startTimer(breakSec));
     currentCycle ++;
  }
 
};


// startSession is invoked in the onClick handler of the START button
startSession(10, 10, 3);
