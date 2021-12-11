/* eslint-disable */


async function startTimer() {
  let seconds = 1;

  const callback = () => {
    console.log('seconds: ', seconds);
    seconds ++;
  }
  setInterval(callback, [1000]);
  // console.log('Seconds passed: ', seconds ++);
  return seconds;
};

// async function startBreakTimer() {
//   let seconds = 1;
//   console.log('Break seconds passed: ', seconds ++);
//   return seconds;
// };

function startSession(focusSec, breakSec, cycles) {

  // loop through the number of cycles
  for (let i = 1; i <= cycles; i++) {
    console.log('start of cycle ' + i);
     startTimer(focusSec).then(() => startTimer(breakSec));
     i ++;
  }
 
};

startSession(10, 10, 3);

// startSession is invoked by onClick handler of the START button
// const startSession = (focusTime, breakTime, cycles) => {

//   setInterval(startFocusTimer, [1000, focusTime]);
// };
