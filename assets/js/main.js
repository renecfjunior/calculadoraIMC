const calcular = document.querySelector('#calcular');
const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');
const maxPeso = 300;
const maxAltura = 3;

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const nextInput = input.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  });
});

function isEmptyOrInvalid() {
  if (nome.value === '') {
    resultado.textContent = `Preencha todos os campos!`;
  } else if (peso.value === '') {
    resultado.textContent = `Preencha todos os campos!`;
  } else if (altura.value === '') {
    resultado.textContent = `Preencha todos os campos!`;
  }

  if (peso.value > maxPeso) {
    resultado.textContent = 'Peso inválido!';
  }

  if (altura.value > maxAltura) {
    resultado.textContent = 'Altura inválida!';
  }
}

function Imc() {
  const valueImc = (peso.value / (altura.value ** 2)).toFixed(1);

  let classificacao = '';

  if (valueImc <= 18.5) {
    classificacao = 'Abaixo do peso.';
  } else if (valueImc <= 25) {
    classificacao = 'Peso ideal';
  } else if (valueImc <= 30) {
    classificacao = 'Sobrepeso';
  } else if (valueImc <= 35) {
    classificacao = 'Obesidade Grau 1.';
  } else if (valueImc <= 40) {
    classificacao = 'Obesidade Grau 2';
  } else {
    classificacao = 'Obesidade Grau 3';
  }
  resultado.textContent = `${nome.value} seu IMC é ${valueImc} (${classificacao})`;
}

peso.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    Imc();
    isEmptyOrInvalid();
  }
});

calcular.addEventListener('click', event => {
  event.preventDefault();
  Imc();
  isEmptyOrInvalid();
});
