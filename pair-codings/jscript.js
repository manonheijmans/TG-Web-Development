const btn = document.getElementById("btn");
const inputNumber = document.getElementById("number");

const singleNumberArr = ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen"];
const tientallen = ["twintig", "dertig", "veertig", "vijftig", "zestig", "zeventig", "tachtig", "negentig"];
function displayNumber() {
    document.querySelector('.display').innerText = inputNumber.value

}

btn.addEventListener('click', () => {
    console.log("hello")
    
    if ((inputNumber.value).length == 1) {
        document.querySelector('.display').innerText = singleNumberArr[1]
    }
})

// function eenGetal(numb) {
    
// }








/* alles uitgeschreven wordt 

als inputNumber.valaue.length = 1 
dan 0 1 2 3 4 5 6 7 8 9 

als inputnumber value = 2 

dan 

1 2 3 4 5 6 7 8 9 +

en +

10 20 30 40 50 60 70 80 90 



