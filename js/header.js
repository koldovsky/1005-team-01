(function () {

    const clockContainer = document.querySelector('.header___clock');

    function updateTime() {
        clockContainer.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateTime, 1000);

})();