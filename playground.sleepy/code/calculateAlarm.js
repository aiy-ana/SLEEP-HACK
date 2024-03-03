// export default function calculateAlarm({ proposedTime }) {
//     const currentTime  = new Date();
//     const proposedTimeDate = new Date(proposedTime);
//     let timeDiff = proposedTimeDate - currentTime;
    // const RemCyleConst = Math.pow(10, 6) * 5.4;
    // let remCycles = Math.round(timeDiff / RemCyleConst);
//     const calculatedTimeDate = new Date(currentTime.getTime() + (remCycles * RemCyleConst));
//     // console.log(calculatedTimeDate.toDateString() + " " +calculatedTimeDate.toLocaleTimeString());
//     // return calculatedTimeDate.toDateString() + " " + calculatedTimeDate.toLocaleTimeString();
//     return currentTime;
// }

export default function calculateAlarm({ proposedTime, $vivContext }) {
  var currTime = new Date();
  var proposedDate = new Date();

  // Round the current time to the nearest 30 minutes
  var minutes = currTime.getMinutes();
  var roundedMinutes = Math.round(minutes / 30) * 30;
  currTime.setMinutes(roundedMinutes);

  // Set seconds to 00
  currTime.setSeconds(0);

  // Set proposedDate to the next day
  proposedDate.setDate(proposedDate.getDate() + 1);

  // Set the time for proposedDate using proposedTime
  proposedDate.setHours(proposedTime - 11, 0, 0, 0);

  var hours = Math.abs(proposedDate.getTime() - currTime.getTime()) / 36e5;

  // Round hours to the nearest 0.5
  var roundedHours = Math.round(hours * 2) / 2;

  const RemCyleConst = 1.5;
  let remCycles = (Math.round(roundedHours / RemCyleConst)) * RemCyleConst;

  // Add REM cycles to current time
  var alarmTime = new Date();
  var hoursToAdd = Math.floor(remCycles);
  var minutesToAdd = remCycles % 1 === 0 ? 0 : 30;

  alarmTime.setHours(alarmTime.getHours() + hoursToAdd, minutesToAdd, 0, 0);

  // Convert alarmTime to local time in Melbourne timezone
  alarmTime = alarmTime.toLocaleString("en-US", {timeZone: "Australia/Melbourne", hour12: true, hour: 'numeric', minute: 'numeric'});

  return alarmTime;
}









