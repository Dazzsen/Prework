const animalArray = ["dog", "cat", "fish", "lizard", "whale", "cheetah"];
console.log(`Original: ${animalArray}`); 

animalArray.push("monkey", "lion");
console.log(animalArray);

animalArray.splice(0, 2);
console.log(animalArray);

animalArray[5]="last";
console.log(animalArray);
