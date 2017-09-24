document.addEventListener("DOMContentLoaded", function () {

    var counterMin = document.getElementsByClassName('counter-min')[0].innerHTML = 0;
    var counterSek = document.getElementsByClassName('counter-sek')[0].innerHTML = 10;

    var myTimer = setInterval(startCountDown, 1000);

    function startCountDown() {
        var m = document.getElementsByClassName('counter-min')[0].innerHTML;
        var s = checkSek(((document.getElementsByClassName('counter-sek')[0].innerHTML) -1));

        if (s == 59) {
            m = m - 1
        }

        document.getElementsByClassName('counter-min')[0].innerHTML = m;
        document.getElementsByClassName('counter-sek')[0].innerHTML = s;

        if (m == 0 && s == 0) {
            clearInterval(myTimer);
        }
    }

    function checkSek(sek) {
        if (sek < 10 && sek >= 0) {
            sek = "0" + sek;
        }
        else if (sek < 0) {
            sek = "59"
        }
        return sek;
    }


});