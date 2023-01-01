const currentAge = document.getElementById("userInput");
const futureAge = document.getElementById("age");


function getFutureAge(value) {
    // return Number.parseInt(value, 10) + 1;
    // if (value >= )
}

function getAge() {
    futureAge.textContent = getFutureAge(currentAge.value);
}

currentAge.addEventListener("keyup", getAge)




const toNum = (num) => Number.parseInt(num, 10)

function toNum2 (num) {
    return Number.parseInt(num, 10)
}

const calculateNum = (x, y) => {
   const sum =  Number.parseInt(x, 10) + Number.parseInt(y, 10)
   return sum;

}