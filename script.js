/* Função criada em um ficheiro externo que mostra uma mensagem */
function abrirJanela (){
    window.open("./janela.html");
}

/* Função criada em um ficheiro externo para trocar a imagem da lampada */
function acenderLampada(){
   var a = document.getElementById("Lampada");
   a.src = "lampadaOn.jpg";
}

/* Função criada em um ficheiro externo para separar string retonada pelo input */
function separarNome () {
    var nome = document.getElementById("nome").value;
    var nomeSeparado = nome.split(" ");
    for (i in nomeSeparado) {
        console.log(nomeSeparado[i]);
    }
    document.getElementById("nome").value = "";
}

/* Função criada em um ficheiro externo para fazer saudacao ao usuario */
function fazerSaudacao () {
    var nome = document.getElementById("nomeInicial").value;
    var sobrenome = document.getElementById("Sobrenome").value;
    alert("Olá "+ nome + " " + sobrenome);
    document.getElementById("nomeInicial").value = "";
    document.getElementById("Sobrenome").value = "";
}

/* Função criada em um ficheiro externo para calcular media */
function calcMedia () {
    var entrada = document.getElementById("entradaMedia").value; 
    var numEntrada = entrada.split(",");
    var total = 0;
    for (i in numEntrada) {
        total = total + parseInt(numEntrada[i]);
    } 
    total = total / numEntrada.length;
    alert("A media e "+total);
    document.getElementById("entradaMedia").value = "";
}

/* Função criada em um ficheiro externo para calcular quadrado de numeros digitados no input */
function calcQuadrado(){
    var entrada = document.getElementById("entradaQuadrado").value; 
    var numEntrada = entrada.split(",");
    for ( i in numEntrada) {
        var num = parseInt(numEntrada[i]);
        alert((parseInt(i)+1)+"° numero "+numEntrada[i]+"² = "+(num*num));
    }
}

/* Função criada em um ficheiro externo para pesquisar maior numero */
function calcMaiorNumero() {
    var entrada = document.getElementById("numeros").value; 
    var numEntrada = entrada.split(",");
    var num = 0;
    for ( i in numEntrada) {
        if (parseInt(numEntrada[i]) > num) {
            num = parseInt(numEntrada[i]);
        }
    }
    alert("O numero "+num+" e o maior!");
    document.getElementById("numeros").value = "";
}

/* Função criada em um ficheiro externo para calcular quantidade de pessoa maior e menor de idade*/
function calcMaiorIdade() {
    var entrada = document.getElementById("idades").value; 
    var numEntrada = entrada.split(",");
    var menor = 0;
    var maior = 0;
    for ( i in numEntrada) {
        if (parseInt(numEntrada[i]) > 18) {
            maior = maior + 1;
        } else {
            menor = menor + 1;
        }
    }
    alert("Maior de idade: "+maior+" Menor de idade: "+menor);
}

/* Função criada em um ficheiro externo para inverter listas de nomes */
function invertNomes() {
    var entrada = document.getElementById("nomes").value; 
    var numEntrada = entrada.split(" ");
    var listInvert = "";
    for (var i = numEntrada.length - 1; i >= 0 ;i--) {
        listInvert = listInvert + " " + numEntrada[i];
    }
    alert(listInvert);
}