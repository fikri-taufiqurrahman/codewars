// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
    if (number < 0) return 0;
    let num1 = 0,
        num2 = 0,
        num3 = 0;
    for (i = 3; i < number; i += 3) num1 += i
    for (i = 5; i < number; i += 5) num2 += i
    for (i = 0; i < number; i += (3 * 5)) num3 += i
    sum = num1 + num2 - num3
    return sum
}

//best practices
function solution(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }
    return sum;
}
console.log(solution(20))