function doubleChar(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        result += str[i];

    }
    return str
}


console.log(doubleChar('Adidas'))