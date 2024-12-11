function boasVindas(){
    alert("Bem vindo a calculadora!");
}

//FUNÇÃO PARA INSERIR UM NUMERO NO DISPLAY
function insere(num){
    document.getElementById("display").value += num;  // no meu caso o meu tipo é input por isso uso "value"
    // document.getElementById("display").innerHTML+=num;     -> isso é para quando for do tipo div 
}

//FUNÇÃO PARA LIMPAR O DISPLAY
function limpa(){
    document.getElementById("display").value = "";
}

//FUNÇÃO PARA LIMPAR CARACTER POR CARACTER
function deleta(){
    texto = document.getElementById("display").value; //é o texto todo do display
    document.getElementById("display").value=texto.substring(0,texto.length-1);
}


//FUNÇÃO PARA FAZER A OPERAÇÃO 
function calcula(){
    texto = document.getElementById("display").value; //é o texto todo do display
    resultado = eval(texto);
    document.getElementById("display").value = resultado; 
}