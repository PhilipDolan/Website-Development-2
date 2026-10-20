
// query the green button and store it in a variable called greenbtn
//add click event to the green button that will alert the user with a message "Thanks! You're okay too"

const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

// ************************************************//

// query the blue button and store it in a variable called bluebtn
// add click event to the blue button that will toggle the class "hideshow" on the div with id "readmore"
const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    readMoreDiv.classList.toggle("hideshow");
});


//*************************************************** *//

// query the red button and store it in a variable called redbtn

const redbtn = document.querySelector(".red");
/*  Week 2 Lab 2 a

// add click event to the red button that will prompt the user for their name and then display a welcome message in the h1 tag with the user's name

redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");
    username = username.charAt(0).toUpperCase() + username.substring(1).toLowerCase();

    document.querySelector("h1").textContent = `Welcome to the App, ${username} !`;
});
*/


/* week 2 lab 2 b */

//add click event to the red button that will prompt the user for their name and then display a welcome message in the h1 tag with the user's name
// // formatted with the first letter capitalized and the rest of the letters in lowercase. If the user enters multiple words, each word should be
// // formatted correctly.
redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");

    let formattedName = "";
    let words = username.split(" ");

    for (let i = 0; i < words.length; i++) {
        formattedName += words[i].charAt(0).toUpperCase() + 
        words[i].substring(1).toLowerCase() + " "
    }

    document.querySelector("h1").textContent = `Welcome to the App, ${formattedName}!`;
}); 