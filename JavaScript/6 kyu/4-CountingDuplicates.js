function duplicateCount(text) {
    const sortArr = text.toLowerCase().split("").sort()
    let node = 0
    let storageArr = []
    let total = []
    sortArr
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] == sortArr[i + 1]) {
            node++
        } else {
            node++
            storageArr.push([node, sortArr[i]])
            node = 0
        }
    }
    for (let i = 0; i < storageArr.length; i++) {
        for (let j = 0; j < storageArr[i].length; j++) {
            if (storageArr[i][0] > 1) {
                total.push(storageArr[i][1])
            }
        }
    }
    return total.length / 2
}

console.log(duplicateCount("Indivisibilities"))