
var FRUIT_NAMES = [
  'Fig',
  'Watermelon',
  'Strawberry',
  'Banana',
  'Apple',
  'Mango',
  'Grape',
  'Orange',
  'Peach',
  'Cherry',
  'Pineapple',
  'Blueberry',
  'Raspberry',
  'Pear',
  'Melon',
  'Tangerine',
  'Apricot',
  'Kiwi',
  'Lemon',
  'Plum',
  'Nectarine',
  'Pomegranate',
  'Grapefruit',
  'Coconut',
  'Lime',
  'Cantaloupe',
  'Papaya',
  'Lychee',
  'Rhubarb',
  'Kumquat'
];

var SCIENTIST_NAMES = [
  'Newton',
  'Einstein',
  'Bohr',
  'Darwin',
  'Pasteur',
  'Freud',
  'Galilei',
  'Heisenberg',
  'Vesalius',
  'Schrodinger',
  'Faraday',
  'Maxwell',
  'Planck',
  'Curie',
  'Hubble',
  'Fermi',
  'Euler',
  'Koch',
  'Watson',
  'von Neumann',
  'Hawking',
  'Euclid',
  'Chomsky',
  'Oppenheimer',
  'Skinner',
  'Archimedes'
];

fruitEl = document.getElementById('fruit-name');
scientistEl = document.getElementById('scientist-name');

btnNameIt = document.getElementById('new-name');
btnNameIt.addEventListener('click', OnNameIt);

function OnNameIt() {
  var fruit = GetFruitName();
  var scientist = GetScientistName();

  SetFruitName(fruit);
  SetScientistName(scientist);

  fruitEl.innerText = fruit;
  scientistEl.innerText = scientist;
}

function GetFruitName() {
  var name;
  var count = FRUIT_NAMES.length;
  var randomIndex = Math.floor(Math.random() * count);

  name = FRUIT_NAMES[randomIndex];
  return name;
}

function GetScientistName() {
  var name;
  var count = SCIENTIST_NAMES.length;
  var randomIndex = Math.floor(Math.random() * count);

  name = SCIENTIST_NAMES[randomIndex];
  return name;
}

function SetFruitName(fruit) {
  fruitEl.innerText = fruit;
}

function SetScientistName(scientist) {
  scientistEl.innerText = scientist;
}
