// const n1 = document.querySelector('#n1')
// const n2 = document.querySelector('#n2')
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const res = document.getElementById("res")
const oper = document.getElementById("operator")



function addition() {
    res.value = Number(n1.value) + Number(n2.value);
    // console.log("kjhj", n1, n2)
}

function subtraction() {
    res.value = Number(n1.value) - Number(n2.value);
}

function multiplication() {
    res.value = Number(n1.value) * Number(n2.value);
}

function division() {
    res.value = Number(n1.value) / Number(n2.value);
}

function clearInput() {
    n1.value = null
    n2.value = null
    res.value = null
}


function calculate() {

    const value = oper.value;

    if( value === "+"){
        addition()
    }
    if( value === "-"){
        subtraction()
    }
    if( value === "*"){
        multiplication()
    }
    if( value === "/"){
        division()
    }
    if( value === "c"){
        clearInput()
    }

}







