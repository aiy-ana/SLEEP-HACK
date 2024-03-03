
function calculateAlarm(proposedTime) {
    const currentTime  = new Date()
    //const proposedTimeDate = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate(),proposedTime[0],proposedTime[1],0)
    proposedTimeDate = new Date(proposedTime)
    let timeDiff = proposedTimeDate-currentTime
    const RemCyleConst = Math.pow(10,6)*5.4
    let remCycles = Math.round(timeDiff/RemCyleConst)
    const calculatedTimeDate = new Date(currentTime.getTime() + (remCycles * RemCyleConst))
    console.log(calculatedTimeDate.toDateString() + " " +calculatedTimeDate.toLocaleTimeString())
    return calculatedTimeDate.toDateString() + " " +calculatedTimeDate.toLocaleTimeString()
}

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }


function Test(a) {
    const time = calculateAlarm(a)
    document.getElementById("DateText").innerHTML = "Your Alarm Should Be Set At: " + time
    
}

function updateTime(){
    document.getElementById("CurrentTimeDisplay").innerHTML = "Current Time Is: " + new Date().toLocaleTimeString()
}

setInterval(updateTime,1000)