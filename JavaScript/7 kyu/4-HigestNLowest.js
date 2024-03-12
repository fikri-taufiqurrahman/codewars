// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// cari max
// pakai pengulangan
// perbandingan string 1 dan 2 
// ambil max dari 1 dan 2
// perbadingan 2 dan 3 dst


function highAndLow(numbers) {
    arr = numbers.split(" ").map(Number)
    let min = arr[0]
    let max = arr[0]

    for (i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return `${max} ${min}`
}

//best practices
function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}



console.log(highAndLow("1 3 8 4 -3"))