// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    const vowel = ['a', 'i', 'u', 'e', 'o']
    let count = 0
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < vowel.length; j++) {
            str[i] == vowel[j] ? count++ : count
        }
    }

    return count
}

//harus belajar regex
//ini keren
function getCount(str) {
    console.log((str.match(/[aeiou]/ig) || []).length)
    return (str.match(/[aeiou]/ig) || []).length;
}

console.log(getCount("akubisaterbang"))