import frutas from "./food";
import { remove, choice } from "./helpers";

let randomFruit = choice(frutas);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}.`);
console.log(`Delicious! May I have another?`);
remove(frutas, randomFruit);
console.log(`I'm sorry, we're all out. We have ${frutas} left.`);
