const about = {
    "name": "Philip",
    "fullname": "Philip Dolan",
    "image": "images/about me/placeholderforme.png",
    "age": 22,
};



document.querySelector('.cards').insertAdjacentHTML('beforeend', `
    <div class="card">
        <img src="${about.image}">
        <div class="text">
            <h3>${about.fullname}</h3>
            <p>
                <i>${about.name}</i> ${about.age}
            <p>
        </div>
    </div>`
);