'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 0 || n === 1) return 1; ///sin n es igual a 0 o a 1 retorna 1
  else if (n < 0) {
    return 0;
  }
  return n * nFactorial(n - 1);
}
nFactorial(2);
console.log(nFactorial);

function nFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2); ///En cada llamada recursiva, se reduce el valor de n en 1 y se utiliza para calcular el número de Fibonacci para n-1 y n-2. Esto nos permite avanzar en la secuencia de Fibonacci hasta llegar a los casos base (0 y 1) y luego sumar los números de Fibonacci anteriores para obtener el número de Fibonacci deseado.
}

console.log(nFibonacci(2));
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.queque = [];

  this.enqueue = function (value) {
    return this.queque.push(value);
  };
  this.dequeue = function () {
    if (this.queque.length === 0) {
      return undefined;
    }
    return this.queque.shift();
  };

  this.size = function () {
    return this.queque.length;
  };
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
