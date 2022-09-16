//crear una variable en javascript que almacene el elemento HTML llamado resultado//

const escribirUno = () => {
  let resultado = document.getElementById("resultado");
  resultado.value += 1;
  return;
};

const escribirDos = () => {
  let resultado = document.getElementById("resultado");
  resultado.value += 2;
  return;
};

function escribirTres() {
  let resultado = document.getElementById("resultado");
  resultado.value += 3;
  return;
}

function escribirCuatro() {
  let resultado = document.getElementById("resultado");
  resultado.value += 4;
  return;
}

function escribirCinco() {
  let resultado = document.getElementById("resultado");
  resultado.value += 5;
  return;
}

function escribirSeis() {
  let resultado = document.getElementById("resultado");
  resultado.value += 6;
  return;
}

function escribirSiete() {
  let resultado = document.getElementById("resultado");
  resultado.value += 7;
  return;
}

function escribirOcho() {
  let resultado = document.getElementById("resultado");
  resultado.value += 8;
  return;
}

function escribirNueve() {
  let resultado = document.getElementById("resultado");
  resultado.value += 9;
  return;
}

function escribirCero() {
  let resultado = document.getElementById("resultado");
  resultado.value += 0;
  return;
}

function escribirMas() {
  let resultado = document.getElementById("resultado");
  resultado.value += "+";
  return;
}

function escribirMenos() {
  let resultado = document.getElementById("resultado");
  resultado.value += "-";
  return;
}

function escribirMultiplicacion() {
  let resultado = document.getElementById("resultado");
  resultado.value += "*";
  return;
}

function escribirDivision() {
  let resultado = document.getElementById("resultado");
  resultado.value += "/";
  return;
}

function escribirPotencia() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.pow(resultado.value, 2);
  // Math.pow(,2);

  return;
}

function escribirRaiz() {
  let resultado = document.getElementById("resultado");
  resultado.value = Math.sqrt(resultado.value, 2);
  return;
}

function escribirPorcentaje() {
  let resultado = document.getElementById("resultado");
  resultado.value += "%";
  resultado.value = resultado.value / 100;
  return;
}

function Coma() {
  let resultado = document.getElementById("resultado");
  resultado.value += ",";
  return;
}

function Borrar() {
  let resultado = document.getElementById("resultado");
  resultado.value = "";
  return;
}

function Resultado() {
  let resultado = document.getElementById("resultado");
  resultado.value = eval(resultado.value);
  return resultado;
}
