let res = document.getElementById("res");
let res2 = document.querySelector("div#res2");
let res3 = document.querySelector("div#res3");
let res4 = document.querySelector("div#res4");

function Calculator(){
    let num = document.querySelector("#income_calculate");
    let resi = document.getElementById("residents");
    let number = num.value;
    let residents = resi.value;

    if(number / residents <= 2118){
        Result_calculator_positive.style.display = "block";
        res.innerHTML = `${number / residents}`;
        res3.innerHTML = `${2118 - number / residents}`;
        window.alert("uhuuu");
    } else{
        Result_calculator_negative.style.display = "block";
        res2.innerHTML = `${number / residents}`;
        res4.innerHTML = `${number / residents - 2118}`;
        window.alert("breee");
    }

}

function out(){
    Result_calculator_positive.style.display = "none";
    Result_calculator_negative.style.display = "none";
}
