function init() {
    let result = document.getElementById('result'),
        checkL = document.getElementById('checkL'),
        checkS = document.getElementById('checkS'),
        inputVal = document.getElementById('inputVal'),
        setLVal = document.getElementById('setLVal'),
        setSVal = document.getElementById('setSVal'),
        existS = document.getElementById('existS'),
        existL = document.getElementById('existL');

    setInterval(function () {
        if (undefined !== window.localStorage.testKey) {
            existL.innerHTML = window.localStorage.testKey;
        }

        if (undefined !== window.sessionStorage.testKey) {
            existS.innerHTML = window.sessionStorage.testKey;
        }
    }, 100);

    checkL.onclick = function () {
        result.innerHTML = 'Local storage - ' + (window.localStorage ? 'ok' : 'not support');
    };
    checkS.onclick = function () {
        result.innerHTML = 'Session storage - ' + (window.sessionStorage ? 'ok' : 'not support');
    };

    setLVal.onclick = function () {
        window.localStorage.testKey = inputVal.value;
    };
    setSVal.onclick = function () {
        window.sessionStorage.testKey = inputVal.value;
    };



    let worker = new Worker('task.js'),
        workerEl = document.getElementById('worker');

    worker.addEventListener("message", function (e) {
        workerEl.innerHTML = '<p>'+e.data+'</p>';
    }, true);

    worker.postMessage("");//run fibo worker
}

window.addEventListener('load', init, false);