const consoles = [
    {
        "brand": "Playstation",
        "model": "1",
        "released": 1995,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "2",
        "released": 2000,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "Portable",
        "released": 2004,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "3",
        "released": 2006,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "Vita",
        "released": 2011,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "4",
        "released": 2013,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Playstation",
        "model": "5",
        "released": 2020,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Xbox",
        "model": "360",
        "released": 2005,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Xbox",
        "model": "One",
        "released": 2013,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "Gamecube",
        "released": 2001,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "Wii",
        "released": 2006,
        "isModded": true,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "DSi",
        "released": 2008,
        "isModded": true,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "3DS",
        "released": 2011,
        "isModded": true,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "Wii U",
        "released": 2012,
        "isModded": true,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "Switch",
        "released": 2017,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },
    {
        "brand": "Nintendo",
        "model": "Switch 2",
        "released": 2025,
        "isModded": false,
        "gameCount": "PLACEHOLDER",
        "image": "images/consoles/broken.svg",
    },

]


const displayConsoles = () => {
    consoles.forEach(console => document.querySelector('.cards').insertAdjacentHTML('beforeend', `
    <div class="card">
        <img src="${console.image}">
        <div class="text">
            <h3>${console.brand} ${console.model}</h3>
            <p>Released in ${console.released}</p>
            <p>${console.isModded ? "Is Modded" : "Is not modded"}</p>
            <p>I currently have ${console.gameCount} games</p>
        </div>
    </div>
    `)
    );
};



let form = document.querySelector('.consoleMenu');
displayConsoles();


const addConsole = (evt) => {
    evt.preventDefault();
    let newConsole = {
        "brand": form.elements.enterBrand.value,
        "model": form.elements.enterModel.value,
        "released": form.elements.enterRelease.value,
        "isModded": form.elements.enterIsModded.value,
        "gameCount": form.elements.enterGameCount.value,
        "image": URL.createObjectURL(form.elements.uploadImage.files[0]),
    }
    document.querySelector('.cards').innerHTML = "";
    consoles.splice(0, 0, newConsole);
    displayConsoles();
    form.reset();
};



form.addEventListener('submit', addConsole);