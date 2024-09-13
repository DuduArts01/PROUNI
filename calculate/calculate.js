let res = document.getElementById("res");
let res2 = document.querySelector("div#res2");
let res3 = document.querySelector("div#res3");
let res4 = document.querySelector("div#res4");
let res5 = document.querySelector("div#res5");
let res6 = document.querySelector("div#res6");


function Calculator(){
    let num = document.querySelector("#income_calculate");
    let resi = document.getElementById("residents");
    let number = num.value;
    let residents = resi.value;

    if(number / residents <= 2118){
        Result_calculator_full_value.style.display = "block";
        res.innerHTML = `${number / residents}`;
        res2.innerHTML = `${2118 - number / residents}`;
    } else if(number / residents <= 4236){
        Result_calculator_partial_value.style.display = "block";
        res3.innerHTML = `${number / residents}`;
        res4.innerHTML = `${4236 - number / residents}`;
    } else{
        Result_calculator_negative.style.display = "block";
        res5.innerHTML = `${number / residents}`;
        res6.innerHTML = `${number / residents - 2118}`;
    }

}

function out(){
    Result_calculator_full_value.style.display = "none";
    Result_calculator_partial_value.style.display = "none";
    Result_calculator_negative.style.display = "none";
}
