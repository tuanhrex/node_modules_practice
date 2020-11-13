const { favFoods } = require("./myModule")
const pokemon = require('pokemon');
const NBA = require('nba');
const curry = NBA.findPlayer('Stephen Curry')
const temperature = require('temperature')
const randomColor = require('randomcolor')


favFoods();

console.log(pokemon.random());

console.log(pokemon.getName(125));

console.log(pokemon.getId('Pikachu'));

// Can also get Pokemon names in different languages

console.log(pokemon.getName(25, 'de'));
console.log(pokemon.getName(125, 'de'));

console.log(curry)

console.log(temperature.kelvinToCelsius(100))
console.log(temperature.celsiusToKelvin(100))
console.log(temperature.kelvinToFahrenheit(600))

// Makes an array of random colors
let colorArray = (randomColor({
    count: 25,
    luminosity: 'bright',
    hue: 'random'
 }))

 console.log(colorArray)

