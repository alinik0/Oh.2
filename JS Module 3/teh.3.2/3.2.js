const count = parseInt(prompt("Number of participants:"));
const names = [];

for (let i = 0; i < count; i++) {
    const name = prompt("Enter participant's name:");
    names.push(name);
}

names.sort();

for (let i = 0; i < names.length; i++) {
    const li = document.createElement("li");
    li.textContent = names[i];
    document.querySelector("#participants").appendChild(li);
}