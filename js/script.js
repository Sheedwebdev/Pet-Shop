const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet =  {
      name: name,
      species: species,
      isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)
      sleep: function () {
        console.log(`${this.name} needs a nap. Zzz…`);
        this.isTired = 1;
        },
      play: function () {
        if (this.isTired === 10) {
          console.log(`Too tired to play.`) 
          this.sleep();
        } else {
            console.log(`Yay! ${this.name} loves to play!`);
            this.isTired += 1;
        }
      }
    };

    return pet;
};

const sora = createPet("Sora","ferret");
const clover = createPet("Clover","rabbit");
const baxter = createPet("Baxter","hamster");
const cleo = createPet("Cleo","rat");
const francine = createPet("Francine","turtle");

// Part1: Update Properties & Create an Array of Objects
clover.isTired = 8;
francine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, francine];

// Part2: Display Pets in the Browser
const showPets = function (petArray) {
    pets.innerHTML = "";
    for (let pet of petArray) {
      let status = "ready to play!";
      if (pet.isTired >= 7) {
        status = "sleeping.";
      }
      const li = document.createElement("li");
      li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;
      pets.append(li);
    }
};

// Part3: Add a Click Event
statusButton.addEventListener("click", function () {
  showPets(allPets);
  }
);


// P.S. Very important not to confuse pet and pets!!!  pet is the 
// template object literal that is defined at the top of the code.  On the 
// other hand, pets is really targeting/selecting the empty ul element that
// is below the button.  In the future it maybe a better idea to give 
// variables distinct names to avoid the confusion!!!