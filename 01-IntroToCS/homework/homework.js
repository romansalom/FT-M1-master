'use strict';

function BinarioADecimal(binario) {
  if (binario === '') {
    return 0;
  }

  let decimal = 0;
  const binarioInvertido = binario.split('').reverse().join('');

  for (let i = 0; i < binarioInvertido.length; i++) {
    const digito = binarioInvertido[i];
    const valorDigito = digito === '1' ? 1 : 0;
    decimal += valorDigito * Math.pow(2, i);
  }

  return decimal;
}

function DecimalABinario(num) {
  if (num === 0) {
    return '0';
  }

  let binario = '';
  let numero = num;

  while (numero > 0) {
    const residuo = numero % 2;
    binario = residuo.toString() + binario;
    numero = Math.floor(numero / 2);
  }

  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
