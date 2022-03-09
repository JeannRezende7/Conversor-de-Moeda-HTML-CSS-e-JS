# Conversor-de-Moeda-HTML-CSS-e-JS
Realizado no Imersão Dev dia 02. <br/>
Projeto simples de conversor de moeda em dolar USD,real BRL, e bitcoin BTC. <br/>
Somente Front-end: HTML,CSS e JS <br/>

Projeto no Netlify: https://goofy-hodgkin-bf425b.netlify.app/ <br/>
Projeto Piloto: https://codepen.io/imersao-dev/pen/zYNOZRX



Algumas anotações:

######################
JS - JavaScript
######################

# function no JS vai criar uma função para o HTML,por exemplo: <br/>

```
function Converter () {

//Minha função aqui
 
}
```

é importante lembrar que no HTML devemos deixar um campo para receber essa função,por exemplo:  <br/>
```
<button type="submit" onclick="ConverterToBrl()">Converter</button>
        <!-- No Evento onclick eu coloco o mesmo nome da função que vou usar depois no JS. -->
       
```

# toFixed fixa o numero de casas decimais usadas,ex: <br/>
var notaFixada = notaFinal.toFixed(1)

# innerHTML leva o valor da variavel para o campo no HTML, por exemplo: <br/>

 var elementoValorConvertido = document.getElementById("valorConvertidoUSD");
        //Aqui fazemos um get para buscar o elemento onde vamos inserir a var

```
        var valorComTexto = "O resultado em BRL é: " + ValorFinalConverterMoeda;
        //Aqui somente estamos montando uma string onde mostramos o texto + o valor

        elementoValorConvertido.innerHTML = valorComTexto;
    }
    //innerHTML leva o valor da variavel para o campo no HTML
}

```

# Podemos usar o Intl.NumberFormat para definir a moeda usada,por exemplo: <br/>

```
        var valorParaConverter = parseFloat(valor);
        var valorFinal = valorParaConverter * valorDolar;
        var valorFinalFixado = valorFinal.toFixed(2);
        var ValorFinalConverterMoeda = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorFinalFixado);

        /*
   Aqui fazemos 3 conversões:
   parseFloat(valor) pois originalmente o valor era uma string,com isso transforamos em um numerico,como o double.
   toFixed para definir o numero de casas decimais.
   Intl.NumberFormat para definir a moeda para BRL.
   Fazendo o Intl nao é necessário o ToFixed, pois ele ja converte para a moeda e ajusta as casas decimais, mas vou manter de exemplo.
   */
   
   ```
   
# Exemplo simples de como usar o IF e Else: <br/>
     ```
    if (valor.length == 0) {
        alert("Por favor não deixe o campo em branco!");
    } else {
        var valorParaConverter = parseFloat(valor);
     ```
# Exemplo simples para criar botões ,imput e label no HTML ### <br/>
    
        <label for="moeda">Conversor BRL (Real) para USD (Dólar) </label><br> 
        <input type="number" id="valor2" size="2" /><br>
        <button type="submit" onclick="ConverterToUsd()">Converter</button>
        <h3 id="valorConvertidoBRL"></h3>
