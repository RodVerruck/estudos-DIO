var cn = document.getElementById("currentNumber");
var numeroAtual = 0

const increase = document.getElementById("add");
increase.addEventListener("click", adicionar)

function adicionar () {
    document.getElementById("currentNumber").innerHTML = numeroAtual++;
}

const decrease = document.getElementById("dec");
decrease.addEventListener("click", subtrair)

function subtrair () {
    document.getElementById("currentNumber").innerHTML = numeroAtual--;
}