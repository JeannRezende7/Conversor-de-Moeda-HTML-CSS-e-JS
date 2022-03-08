var valorDolar = 5.06;
var valorBitcoin = 195058.76;
//Aqui vou informar o equivalente a 1 real na moeda estrangeira.

function ConverterToBrl() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    if (valor.length == 0) {
        alert("Por favor não deixe o campo em branco!");
    } else {
        var valorParaConverter = parseFloat(valor);
        var valorFinal = valorParaConverter * valorDolar;
        var valorFinalFixado = valorFinal.toFixed(2);
        var ValorFinalConverterMoeda = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorFinalFixado);

        /*
   Aqui fazemos 2 conversões:
   ToFixed para definir o numero de casas decimais.
   Intl.NumberFormat para definir a moeda para BRL.
   Fazendo o Intl nao é necessário o ToFixed pois ele ja converte para a moeda e ajusta as casas decimais, mas vou manter de exemplo.
   */

        var elementoValorConvertido = document.getElementById("valorConvertidoUSD");
        //Aqui fazemos um get para buscar o elemento onde vamos inserir a var

        var valorComTexto = "O resultado em BRL é: " + ValorFinalConverterMoeda;
        //Aqui somente estamos montando uma string onde mostramos o texto + o valor

        elementoValorConvertido.innerHTML = valorComTexto;
    }
    //innerHTML leva o valor da variavel para o campo no HTML
}

function ConverterToUsd() {
    var valorElemento = document.getElementById("valor2");
    var valor = valorElemento.value;
    if (valor.length == 0) {
        alert("Por favor não deixe o campo em branco!");
    } else {
        var valorParaConverter = parseFloat(valor);
        var valorFinal = valorParaConverter / valorDolar;
        var valorFinalFixado = valorFinal.toFixed(2);
        var ValorFinalConverterMoeda = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorFinalFixado);

        var elementoValorConvertido = document.getElementById("valorConvertidoBRL");

        var valorComTexto = "O resultado em USD é: " + ValorFinalConverterMoeda;

        elementoValorConvertido.innerHTML = valorComTexto;
    }
}

function ConverterToBtc() {
    var valorElemento = document.getElementById("valor3");
    var valor = valorElemento.value;
    if (valor.length == 0) {
        alert("Por favor não deixe o campo em branco!");
    } else {
        var valorParaConverter = parseFloat(valor);
        var valorFinal = valorParaConverter / valorBitcoin;
        var valorFinalFixado = valorFinal.toFixed(7);

        var elementoValorConvertido = document.getElementById("valorConvertidoBTC");

        var valorComTexto = "O resultado em BTC é: BTC " + valorFinalFixado;

        elementoValorConvertido.innerHTML = valorComTexto;
    }
}

function ConverterBtcToBrl() {
    var valorElemento = document.getElementById("valor4");
    var valor = valorElemento.value;
    if (valor.length == 0) {
        alert("Por favor não deixe o campo em branco!");
    } else {
        var valorParaConverter = parseFloat(valor);
        var valorFinal = valorParaConverter * valorBitcoin;
        var valorFinalFixado = valorFinal.toFixed(2);
        var ValorFinalConverterMoeda = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorFinalFixado);

        var elementoValorConvertido = document.getElementById(
            "valorConvertidoBtcToBrl"
        );

        var valorComTexto = "O resultado em BRL é: " + ValorFinalConverterMoeda;

        elementoValorConvertido.innerHTML = valorComTexto;
    }
}