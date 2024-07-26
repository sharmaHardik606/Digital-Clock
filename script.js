const URL = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

let circles = document.querySelectorAll(".circle");
let amPm = document.querySelector(".ap");

const getTime = async()=>{
 try{
    let response = await fetch(URL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

   
    let data = await response.json();
    let datetime = data.datetime;

    let hour = datetime;
    hour= hour[11]+hour[12];

    let min = datetime;
    min = min[14]+min[15];

    let sec = datetime;
    sec = sec[17]+sec[18];
    
    // updating the AM/PM
    let period = hour >= 12 ? 'PM' : 'AM';

    // converting 24 hour to 12 hour format
    let hour12 = hour % 12;
        hour12 = hour12 ? hour12 : 12;

    if(hour12 < 10){
        hour12 = '0' + hour12;
    }

    // let {hour12} = timeFormat(hour);

// assigning time to circles
    document.getElementById('hour').innerText = hour12;
    document.getElementById('minute').innerText = min;
    document.getElementById('second').innerText = sec;
    amPm.innerText = period;
    
 }  
 catch (error) {
    console.error("An error occurred while fetching the time:", error);
}

}

getTime();
setInterval(getTime, 1000);

