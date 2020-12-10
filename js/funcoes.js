function inserir7(){
    document.getElementById("visor").value += 7;
}
function inserir8 (){
document.getElementById("visor").value += 8 

}
function inserirmais(){
document.getElementById("visor").value += "+";
}
function inserir1(){
    document.getElementById("visor").value += 1;
}
function inserir2(){
    document.getElementById("visor").value += 2;
}
function inserir3(){
    document.getElementById("visor").value += 3;
}
function inserir4(){
    document.getElementById("visor").value += 4;
}
function inserir5(){
    document.getElementById("visor").value += 5;
}
function inserir6(){
    document.getElementById("visor").value += 6;
}
function inserir9(){
    document.getElementById("visor").value += 9;
}
function inserirmultiplicacao(){
    document.getElementById("visor").value += "*";
}
function inserirmenos(){
    document.getElementById("visor").value += "-";
}
function inserirdivisao(){
    document.getElementById("visor").value += "/";
}
function inserir0(){
    document.getElementById("visor").value += 0;
}
function inserirponto(){
    document.getElementById("visor").value += ".";
}
function limparvisor(){
    document.getElementById("visor").value = "";
}
{ function Raizquadrada(){
 let numero = document.getElementById("visor").value;
 document.getElementById("visor").value = Math.sqrt(numero);

}
function calcular(){
    let expressao = document.getElementById ("visor").value ;
    let resultado = eval (expressao);
  
    document.getElementById("visor").value = resultado;

}
}
 function apagar(){
let conteudo = document.getElementById("visor").value;
document.getElementById("visor").value = conteudo.substring(0, conteudo.length - 1);
}