const clock = () => {
    const today = new Date();
    const currentDate = today.toLocaleDateString([]);
    const currentTime = today.toLocaleTimeString([], {timeStyle:'short'});
    document.querySelector('.date').textContent = `The current date is ${currentDate}`;
    document.querySelector('.time').textContent = `The current time is ${currentTime}`;
};

setInterval(clock, 1000);