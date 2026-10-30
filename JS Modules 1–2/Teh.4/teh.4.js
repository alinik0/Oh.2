const nimi = prompt("Mikä sinun nimesi on?");

const random = Math.floor(Math.random() * 4);

let tivi;

if (random === 0) {
    tivi = "Rohkelikko";
} else if (random === 1) {
    tivi = "Luihuinen";
} else if (random === 2) {
    tivi = "Puuskupuh";
} else {
    tivi = "Korpinkynsi";
}

document.querySelector("#demo").textContent =
    `${nimi}, kuulut tupaan ${tivi}!`;