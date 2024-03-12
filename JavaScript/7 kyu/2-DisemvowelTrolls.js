// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    return str.replace(/[aiueo]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"))