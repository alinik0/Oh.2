const cand = [];
const count = Number(prompt("How many candidates?"));

for (let i = 0; i < count; i++) {
    let name = prompt("Candidate name:");
    cand.push({name: name, votes: 0});
}

const voters = Number(prompt("How many voters?"));

for (let i = 0; i < voters; i++) {
    let vote = prompt("Who do you vote for?");

    for (let j = 0; j < cand.length; j++) {
        if (vote === cand[j].name) {
            cand[j].votes++;
        }
    }
}

cand.sort((a, b) => b.votes - a.votes);

console.log("The winner is " + cand[0].name +
    " with " + cand[0].votes + " votes.");

console.log("results:");

for (let i = 0; i < cand.length; i++) {
    console.log(cand[i].name + ": " +
        cand[i].votes + " votes");
}