function showcurrentDate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() +1;
    let day = today.getDate();

    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;

    let exactDate = `${day}/${month}/${year}`

    let weekDay =

    document.getElementById("date").innerText = exactDate;

    document.getElementById("date").textContent = exactDate;

}

showcurrentDate();

function showcurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let meridian = "AM"

    if (hr == 0) {
        hr = 12;
    }
    
    if (hr > 12) {
        hr = hr - 12;
        meridian = "PM"
    }

    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    let currentTime = `${hr} : ${min} : ${sec} ${meridian}`;

    document.getElementById("MyClock").innerText = currentTime;

    document.getElementById("MyClock").textContent =currentTime;

        setTimeout(showcurrentTime, 1000);

}

showcurrentTime();

function showDay(params) {
    let date = new Date();
    let dayOfWeekNumber = date.getDay();
    let nameOfDay;
    let quote;

    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            quote = "Go to Church";
            break;
        case 1:
            nameOfDay = 'Monday';
            quote = 'Monday morning blues!, Go get some cash';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            quote = 'Taco Time!';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            quote = 'Two more days to the weekend.';
            break;
        case 4:
            nameOfDay = 'Thursday';
            quote = 'The weekend is almost here..., a';
            break;
        case 5:
            nameOfDay = 'Friday';
            quote = 'Weekend is here!';
            break;
        case 6:
            nameOfDay = 'Saturday';
            quote = 'Time to party!';
            break;

    }
   
    document.getElementById("WeekDay").innerText = `${nameOfDay} (${quote})`;

    document.getElementById("WeekDay").textContent = `${nameOfDay} (${quote})`;


}

showDay();