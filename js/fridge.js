function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    let timerSet = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        // var statusCompressor = localStorage.getItem('isWorkComporessor');
        if (--timer < 0) {
            timer = 60;
            if (localStorage.getItem('isWorkComporessor') == 1) {
                localStorage.setItem('isWorkComporessor', 0);
                timer = duration;
            }
            else {
                localStorage.setItem('isWorkComporessor', 1);
                timer = 60;
            }
            // localStorage.setItem('isWorkComporessor', 1);
        }
        var defaultText = document.querySelector('#text');
        changeInfo(defaultText);
    }, 1000);
}

function changeInfo(display) {
    if (localStorage.getItem('isWorkComporessor') == 0) {
        display.textContent = 'Time before compressor starts ';
    } else {
        display.textContent = 'Idle time starts ';
    }
}

window.onload = function () {
    localStorage.setItem('mode', 1);
    localStorage.setItem('isWorkComporessor', 0);
    localStorage.setItem('isOpenOrCloseDoor', 0);
    var defaultText = document.querySelector('#text');
    changeInfo(defaultText);
    var oneMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
    document.getElementById("openDoorBtn").onclick = function () {
        document.getElementById("closeDoor").style.display = "none";
        document.getElementById("openDoor").style.display = "block";
        localStorage.setItem('isOpenOrCloseDoor', 1);
    }
    document.getElementById("closeDoorBtn").onclick = function () {
        document.getElementById("openDoor").style.display = "none";
        document.getElementById("closeDoor").style.display = "block";
        localStorage.setItem('isOpenOrCloseDoor', 0);
    }
    document.getElementById("changeModeToOne").onclick = function () {
        if (localStorage.getItem('isOpenOrCloseDoor') == 0) {
            alert('Дверь закрыта, открой!');
        }
        else {
            for (var i = 1; i < 99999; i++)
                window.clearInterval(i);
            var oneMinutes = 60 * 1,
                display = document.querySelector('#time');
            startTimer(oneMinutes, display);
        }
        localStorage.setItem('mode', 1);
        mode = localStorage.getItem('mode');
        document.querySelector('#modeIs').textContent = mode;
    }
    document.getElementById("changeModeToTwo").onclick = function () {
        if (localStorage.getItem('isOpenOrCloseDoor') == 0) {
            alert('Дверь закрыта, открой!');
        }
        else {
            for (var i = 1; i < 99999; i++)
                window.clearInterval(i);
            var oneMinutes = 60 * 2,
                display = document.querySelector('#time');
            startTimer(oneMinutes, display);
        }
        localStorage.setItem('mode', 2);
        mode = localStorage.getItem('mode');
        document.querySelector('#modeIs').textContent = mode;
    }
    document.getElementById("changeModeToThree").onclick = function () {
        if (localStorage.getItem('isOpenOrCloseDoor') == 0) {
            alert('Дверь закрыта, открой!');
        }
        else {
            for (var i = 1; i < 99999; i++)
                window.clearInterval(i);
            var oneMinutes = 60 * 3,
                display = document.querySelector('#time');
            startTimer(oneMinutes, display);
        }
        localStorage.setItem('mode', 3);
        mode = localStorage.getItem('mode');
        document.querySelector('#modeIs').textContent = mode;
    }
};