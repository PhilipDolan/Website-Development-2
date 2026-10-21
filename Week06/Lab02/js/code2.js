const cars = [
  {
    regNo: "221-KK-1234",
    make: "Toyota",
    model: "Corolla",
    colour: "Red",
  },
  {
    regNo: "211-WD-234",
    make: "Tesla",
    model: "Model 3",
    colour: "Blue",
  },
  {
    regNo: "242-KK-999",
    make: "Toyota",
    model: "C-HR",
    colour: "Blue",
  },
];



let form = document.querySelector('form');


const addRecord = (evt) => {
  evt.preventDefault()
  newcar = {
    regNo: form.elements.reg.value,
    make: form.elements.make.value,
    model: form.elements.model.value,
    colour: form.elements.colour.value,
  }
  cars.push(newcar)
  displayRecs()
  form.reset()
  form.elements[0].focus()
};



form.addEventListener('submit', addRecord);
const table = document.querySelector("table");


table.addEventListener("click", (evt) => {
  if (evt.target.matches("button")) {
    deleteRec = cars.findIndex((car) => car.regNo === evt.target.dataset.id);
    cars.splice(deleteRec, 1);
    displayRecs();
  }
});



const displayRecs = () => {
  table.textContent = "";
  if (cars.length > 0) {
    table.insertAdjacentHTML(
      "beforeend",
      `<tr><th>Make</th><th>Model</th><th>Colour</th></tr>`
    );
    cars.forEach((car) => {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr><td>${car.make}</td><td>${car.model}</td><td>${car.colour}</td>
	       <td><button data-id = ${car.regNo} >Delete</button></tr>`
      );
    });

  }
};

displayRecs();


const openDialogue = document.querySelector("#toggle");
const dialog = document.querySelector("dialog");
openDialogue.addEventListener("click", () => {
  dialog.showModal();
});

const enter = document.querySelector("button");
enter.addEventListener("submit", (evt) => {
  evt.preventDefault();
  dialog.addRecord();
});

const closeDialogue = document.querySelector("#close");
closeDialogue.addEventListener("click", (evt) => {
  evt.preventDefault();
  dialog.close();
});






