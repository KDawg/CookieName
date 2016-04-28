
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
  'Kumquat',
  'Honeydew',
  'Clementine',
  'Gooseberry',
  'Guava',
  'Cranberry',
  'Mulberry',
  'Pumpkin',
  'Plaintain',
  'Boysenberry'
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
  'Archimedes',
  'Turing',
  'Goodall',
  'Dawkins',
  'Edison',
  'Tesla',
  'da Vinci'
];

var fruitEl, scientistEl;
var btnNameIt, btnTweetName;
var cookieName;


Init();


function Init() {
  fruitEl = document.getElementById('fruit-name');
  scientistEl = document.getElementById('scientist-name');

  btnNameIt = document.getElementById('new-name');
  btnNameIt.addEventListener('click', OnNameIt);

  btnTweetName = document.getElementById('tweet-name');
  btnTweetName.addEventListener('click', OnTweetIt);

  cookieName = 'Fig Newtons';
}


function OnNameIt() {
  var fruit = GetFruitName();
  var scientist = GetScientistName();

  SetFruitName(fruit);
  SetScientistName(scientist);
  cookieName = FormatCookieName(fruit, scientist);

  ga('send', 'event', 'Name', 'Generate');
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


function FormatCookieName(fruit, scientist) {
  return fruit + ' ' + scientist + 's';
}


function SetFruitName(fruit) {
  fruitEl.innerText = fruit;
}


function SetScientistName(scientist) {
  scientistEl.innerText = scientist + 's';
}


function OnTweetIt() {
  var url = 'https://twitter.com/share?url=http://www.cookiename.com&amp;text=My cookie name is ' + cookieName + '. Get yours now! Free and fun!';

  window.open(url,'_blank');
  ga('send', 'event', 'Name', 'Tweet');
}
