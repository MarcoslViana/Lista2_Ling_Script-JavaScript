const nomeInput = document.querySelector('#nome');
const salarioInput = document.querySelector('#salario');
const adicionarBtn = document.querySelector('#adicionarBtn');
const listaSalarios = document.querySelector('#listaSalarios');
const totalSalariosSpan = document.querySelector('#totalSalarios');
const maiorSalarioSpan = document.querySelector('#maiorSalario');

let salarios = [];

adicionarBtn.addEventListener('click', function() {
    adicionarSalario();
});

function adicionarSalario() {
    const nome = nomeInput.value;
    const salario = parseFloat(salarioInput.value);

    if (nome !== '' && !isNaN(salario)) {
        const novoSalario = { nome, salario };
        salarios.push(novoSalario);
        exibirSalarios();
        calcularTotalSalarios();
        calcularMaiorSalario();
        limparCampos();
    }
}

function exibirSalarios() {
    listaSalarios.textContent = '';
  
    salarios.forEach(salario => {
      const novoItem = document.createElement('li');
      const textoSalario = document.createTextNode(`${salario.nome}: R$ ${Math.round(salario.salario * 100) / 100}`);
      novoItem.appendChild(textoSalario);
      listaSalarios.appendChild(novoItem);
    });
}

function calcularTotalSalarios() {
    const total = salarios.reduce((acc, salario) => acc + salario.salario, 0);
    totalSalariosSpan.textContent = total.toFixed(2);
}

function calcularMaiorSalario() {
    if (salarios.length > 0) {
        const maiorSalario = salarios.reduce((max, salario) => (max.salario > salario.salario) ? max : salario);
        maiorSalarioSpan.textContent = `${maiorSalario.nome}: R$ ${maiorSalario.salario.toFixed(2)}`;
    }
}

function limparCampos() {
    nomeInput.value = '';
    salarioInput.value = '';
}