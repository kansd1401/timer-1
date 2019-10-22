const setTimer = times => times.forEach(time => {
  const timeInt = parseInt(time); 
  if (timeInt >= 0 && Number.isInteger(timeInt)) {
    setTimeout(() => process.stdout.write('\x07'), timeInt * 1000);
  };
});

setTimer(process.argv.slice(2));