addEventListener('message', function (e) {
    for (var i = 0; i < 40; i++) {
        postMessage("iteration "+ i + " = " + calcFib(i) + "<br />");
    }
}, true);

function calcFib(x) {
    if (x > 1) {
        return calcFib(x - 1) + calcFib(x - 2);
    }
    else {
        return x;
    }
}

