let res = document.getElementById("res");
let res2 = document.querySelector("#res2");
let res3 = document.querySelector("#res3");
let res4 = document.querySelector("#res4");
let res5 = document.querySelector("#res5");
let res6 = document.querySelector("#res6");


function Calculator(){
    let num = document.querySelector("#income_calculate");
    let resi = document.getElementById("residents");
    let number = num.value;
    let residents = resi.value;

    if(!number.trim() && !residents.trim()){
        window.alert("Por favor, Digite o valor da Renda e Moradores!");
    } else if(!number.trim()){
        window.alert("Por favor, Digite o valor da Renda!");
    }else if(!residents.trim()){
        window.alert("Por favor, Digite a quantidade de Moradores!");
    } else if(number / residents <= 2118){
        Result_calculator_full_value.style.display = "block";
        res.innerHTML = `${(number / residents).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
        res2.innerHTML = `${(2118 - number / residents).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    } else if(number / residents <= 4236){
        Result_calculator_partial_value.style.display = "block";
        res3.innerHTML = `${(number / residents).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
        res4.innerHTML = `${(4236 - number / residents).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    } else{
        Result_calculator_negative.style.display = "block";
        res5.innerHTML = `${(number / residents).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
        res6.innerHTML = `${(number / residents - 2118).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`;
    }

}

function out(){
    Result_calculator_full_value.style.display = "none";
    Result_calculator_partial_value.style.display = "none";
    Result_calculator_negative.style.display = "none";
}
