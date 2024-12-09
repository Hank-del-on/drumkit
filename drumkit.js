class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("Honk honk");
  }
}

const myCar = new Car("Mercedes", 2018);
console.log(myCar); // This will log the car object
myCar.honk(); // This will log "Honk honk"

Math.random(); // This line generates a random number but does nothing with it

const myDate = new Date();
console.log(myDate.getTime()); // Call the function with parentheses to log the current timestamp

const mySound = new Audio(); // This creates an Audio object but doesn't define a source

const container = document.querySelector("#container"); // Assumes there's an element with id "container"

const drumMap = {
  kick: "q",
  snare: "w",
  hihat: "r",
  ride: "t",
  tom: "y",
  tink: "u",
  clap: "i",
};

for (let key in drumMap) {
  // Fix variable name from drimMap to drumMap
  const drum = document.createElement("div");
  drum.style.display = "flex";
  drum.style.flexDirection = "row"; // Fix "colum" to "column"

  // Make drum image
  const image = document.createElement("img");
  image.src = `./pics/${key}.jpg`; // Correct usage of key
  image.style.height = "100px";
  image.style.width = "100px";

  // Drum names
  const drumTxt = document.createElement("p");
  drumTxt.textContent = `${key[0].toUpperCase()}${key.slice(1)}`; // This line is correct, it capitalizes the first letter

  // Display keyboard shortcut
  const shortcut = document.createElement("kbd");
  shortcut.textContent = drumMap[key]; // This is correct, displays the keyboard shortcut
  shortcut.style.fontSize = "2rem";

  // Event listener for clicks
  image.addEventListener("click", () => {
    new Audio(`./sounds/${key}.wav`).play(); // Plays the corresponding sound on click
  });

  // Appending.
  drum.append(image);
  drum.append(drumTxt); // Append drum text
  drum.append(shortcut); // Append keyboard shortcut
  container.append(drum); // Append the drum div to the container
}

window.addEventListener("keydown", (event) => {
  // Event listener for keyboard presses to play sounds
  for (let key in drumMap) {
    if (event.key === drumMap[key]) {
      new Audio(`./sounds/${key}.wav`).play(); // Plays the corresponding sound on keydown
    }
  }
});

const myObject = {
  navn: "Ola",
};

const key = "navn";

console.log(myObject[key]); // This will log "Ola"
