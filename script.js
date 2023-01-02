const currentAge = document.getElementById("userInput");
const futureAge = document.getElementById("age");


function getFutureAge(value) {
    if (value.length >= 1) {
        return Number.parseInt(value, 10) + 1;
    }else {
        return 0;
    }
}

function getAge() {
    futureAge.textContent = getFutureAge(currentAge.value);
}

currentAge.addEventListener("keyup", getAge)



// ES6 function syntax
const toNum = (num) => Number.parseInt(num, 10)



// calcute the sum of 2 numbers
const calculateNum = (x, y) => {
    const sum = toNum(x) + toNum(y)
    console.log(`sum: ${sum}`)
    return sum;

}