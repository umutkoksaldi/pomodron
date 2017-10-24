// pomodoro session times in minutes
const pSessionTime = 25;
const sBreakLength = 5;
const lBreakLength = 30;
// counter to count the number of short breaks
var counter = 0;
document.getElementById("demo").innerHTML = pSessionTime + "m : 00s";

function startPomodoro(){
    // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate.setTime(countDownDate.getTime() + pSessionTime * 60 * 1000);
    var countDownTime = countDownDate.getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        if(counter < 3) {
            let notification = new Notification('Short Break Time!');
            startShortBreak();
            counter++;
        }
        else {
            let notification = new Notification('Long Break Time!');
            startLongBreak();
            counter = 0;
        }
    }
    }, 1000);
}

function startShortBreak(){
    // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate.setTime(countDownDate.getTime() + sBreakLength * 60 * 1000);
    var countDownTime = countDownDate.getTime();
    // Update the count down every 1 second
    var y = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(y);
        let notification = new Notification('Break Time Over!');
        startPomodoro();
    }
    }, 1000);
}

function startLongBreak() {
    // Set the date we're counting down to
    var countDownDate = new Date();
    countDownDate.setTime(countDownDate.getTime() + sBreakLength * 60 * 1000);
    var countDownTime = countDownDate.getTime();
    // Update the count down every 1 second
    var z = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownTime - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m : " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(z);
        let notification = new Notification('Break Time Over!');
        startPomodoro();
    }
    }, 1000);
}
