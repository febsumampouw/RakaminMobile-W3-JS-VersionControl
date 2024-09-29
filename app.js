//Buat array dengan jumlah index 100 (1-50)
function generateRandomArray(length, max) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * max) + 1);
    }
    return randomArray;
}

let mainArray = generateRandomArray(100, 50);
console.log ("Output 1 : ")
console.log("Array 100 nilai random (1-50): ", mainArray);

//Array genap dan ganjil
let evenArray   = [];
let oddArray    = [];

function splitArrayByIndex(array){
    array.forEach((value, index) => {
        if (index % 2 == 0){
            evenArray.push (value);
        } else{
            oddArray.push(value);
        }
    });
}

splitArrayByIndex(mainArray);
console.log("Output 2 :")
console.log("- Array Genap : ", evenArray);
console.log("Output 3 :")
console.log("- Array Ganjil : ", oddArray);

//fungsi menghitung min, max, total, dan rata-rata tanpa fungsi bawaan
function getMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++){
        if (array [i] > max){
            max = array[i];
        }
    }
    return max;
}

function getTotal (array){
    let total = 0;
    array.forEach ( value => total += value);
    return total;
}

function getAverage(array){
    return getTotal(array) / array.length;
}

console.log("Output 4 : ")
console.log("- Min Genap        : ", getMin(evenArray));
console.log("- Max Genap        : ", getMax(evenArray));
console.log("- Total Genap      : ", getTotal(evenArray));
console.log("- Rata-rata Genap  : ", getAverage(evenArray));

console.log("- Min Ganjil       : ", getMin(oddArray));
console.log("- Max Ganjil       : ", getMax(oddArray));
console.log("- Total Ganjil     : ", getTotal(oddArray));
console.log("- Rata-rata Ganjil : ", getAverage(oddArray));

// perbandingan nilai min, max, total, dan rata-rata
function compareArray(evenArray, oddArray){
    console.log("Perbandingan Min       : ", getMin(evenArray) > getMin(oddArray) ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil");
    console.log("Perbandingan Max       : ", getMax(evenArray) > getMax(oddArray) ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil");
    console.log("Perbandingan Total     : ", getTotal(evenArray) === getTotal(oddArray) ? "Total sama" : (getTotal(evenArray) > getTotal(oddArray) ? "Total lebih besar pada array genap" : "Total lebih besar pada array ganjil"));
    console.log("Perbandingan Rata-rata : ", getAverage(evenArray) > getAverage(oddArray) ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil");

}

compareArray(evenArray, oddArray);