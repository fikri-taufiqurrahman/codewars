// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
    let strNum = num.toString()
    let sliceNum = strNum.split("")
    let sqrNum = []
    for (i = 0; i < sliceNum.length; i++) {
        sqrNum.push((sliceNum[i] * sliceNum[i]))
    }

    return parseInt(sqrNum.join(""))
}

console.log(squareDigits(3212))