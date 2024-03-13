function digitalRoot(n) {

    function sumOfDigit(r) {
        return r.toString().split("").map(Number).reduce((a, b) => a + b)
    }
    str = sumOfDigit(n)


    while (str > 9) {
        str = sumOfDigit(str)
    }
    return str
}

console.log(digitalRoot(493193))