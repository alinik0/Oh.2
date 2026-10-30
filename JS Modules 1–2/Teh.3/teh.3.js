const num1 = Number(prompt("Anna ensimmäinen luku:"));
const num2 = Number(prompt("Anna toinen luku:"));
const num3 = Number(prompt("Anna kolmas luku:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector("#demo").innerHTML = `
    Summa: ${sum}<br>
    Tulo: ${product}<br>
    Keskiarvo: ${average} 
`;