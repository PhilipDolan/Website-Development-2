const accept = document.querySelector('#acceptButton');
const decline = document.querySelector('#declineButton');
const message = document.querySelector('#messageButton');
const background = document.querySelector('#outer')

accept.addEventListener('click', (evt) => {
    document.querySelector('#callStatus').textContent = "Call Accepted";
    background.classList = 'accepted';
});

decline.addEventListener('click', (evt) => {
    document.querySelector('#callStatus').textContent = "Call Declined";
    background.classList = 'declined';
});

message.addEventListener('click', (evt) => {
    setTimeout(() => {
        alert("I will call you later");
    }, 200);
    document.querySelector('#callStatus').textContent = "Sending Message...";
    background.classList = 'message';
})