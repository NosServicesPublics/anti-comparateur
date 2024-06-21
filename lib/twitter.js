const listOfNamesMan = [
  "Nathan",
  "Lucas",
  "Léo",
  "Gabriel",
  "Timéo",
  "Enzo",
  "Louis",
  "Raphaël",
  "Arthur",
  "Hugo",
  "Jules",
  "Ethan",
  "Adam",
  "Nolan",
  "Tom",
  "Noah",
  "Théo",
  "Sacha",
  "Maël",
  "Mathis",
  "Abdela",
  "Mohamed",
  "Yassin",
  "Jean-Karim",
  "Björn",
];
const listOfNamesWoman = [
  "Emma",
  "Lola",
  "Chloé",
  "Inès",
  "Léa",
  "Manon",
  "Jade",
  "Louise",
  "Léna",
  "Lina",
  "Zoé",
  "Lilou",
  "Camille",
  "Sarah",
  "Eva",
  "Alice",
  "Maëlys",
  "Louna",
  "Romane",
  "Juliette",
  "Sophie",
  "Inaya",
  "Aliya",
  "Noûr",
  "Elodie",
];
const listOfPictosMan = [
  "m1.png",
  "m2.png",
  "m3.png",
  "m4.png",
  "m5.png",
  "m6.png",
  "m7.png",
];
const listOfPictosWoman = [
  "w1.png",
  "w2.png",
  "w3.png",
  "w4.png",
  "w5.png",
  "w6.png",
  "w7.png",
  "w8.png",
  "w9.png",
  "w10.png",
  "w11.png",
];

export default function pickAWinner() {
  let [listOfNames, listOfPictos] =
    Math.random() > 0.5
      ? [listOfNamesMan, listOfPictosMan]
      : [listOfNamesWoman, listOfPictosWoman];

  const nameNumber = Math.floor(Math.random() * listOfNames.length);
  const numberPicto = Math.floor(Math.random() * listOfPictos.length);
  return [listOfNames[nameNumber], listOfPictos[numberPicto]];
}
