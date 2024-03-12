// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str) {
//     let newStr = ""
//     for (i = str.length ; i != 0; i--) {
//         newStr += str[i-1]
//     }
//     return newStr
// }

function solution(str) {
    return str.split('').reverse().join('');
}



console.log(solution("world"))