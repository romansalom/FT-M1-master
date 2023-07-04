'use strict';

function BinarioADecimal(num) {
  num = num.split('').reverse();
  var suma = 0;
  for (var i = 0; i < num.length; i++) {
    suma += Math.pow(2, i) * num[i];
  }
  console.log(suma);
  return suma;
}

function DecimalABinario(num) {
  if (num === 0) {
    return '0';
  }

  let binario = '';

  while (num > 0) {
    const residuo = num % 2;
    binario = residuo.toString() + binario;
    num = Math.floor(num / 2);
  }

  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
