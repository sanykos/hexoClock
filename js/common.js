window.addEventListener('DOMContentLoaded', function() {
    
    var text = document.querySelector('h1');
    var color = document.querySelector('h2');

    function getTimeStr(time) {
        if(time.length < 2)
            time = '0'+time;
        return time;
    }

    function hexClock() {
        const date = new Date();
        let hours = date.getHours().toString(),
            minutes = date.getMinutes().toString(),
            seconds = date.getSeconds().toString();
        hours = getTimeStr(hours);
        minutes = getTimeStr(minutes);
        seconds = getTimeStr(seconds);

        let color = '#'+hours+minutes+seconds;
        document.body.style.background = color;

        
        console.log(color);
    }

    hexClock();


})