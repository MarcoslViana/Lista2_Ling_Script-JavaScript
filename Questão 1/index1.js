const acharBtn = document.querySelector('#acharBtn');
const resultadoElement = document.querySelector('#resultado');

acharBtn.addEventListener("click", function(){
    
    const inputNumeros = document.querySelector('#numeros');
    const numerosInput = inputNumeros.value;

    const inputSeparador = document.querySelector('#separador');
    const separador = inputSeparador.value;

    const numerosArray = numerosInput.split(separador).map(Number);

    const maiorNumero = Math.max(...numerosArray);
    const menorNumero = Math.min(...numerosArray);

    resultadoElement.textContent = `Maior Número: ${maiorNumero}, Menor Número: ${menorNumero}`;
});

