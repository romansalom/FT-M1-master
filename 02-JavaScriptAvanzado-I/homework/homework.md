# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); /// contexto de la funcion x=10 declarado dentro de la funcion
  console.log(a); ///  contexto de la funcion , c = (8 (a),9(b) ,10(c)), a = 8
  var f = function (a, b, c) {
    b = a;
    console.log(b); /// ///  contexto de la funcion , c = (8 (a),9(b) ,10(c)), b = 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); ////   contexto de la funcion , c = (8 (a),9(b) ,10(c)), b = 9
};
c(8, 9, 10);
console.log(b); ///  contexto global ,b = 10
console.log(x); ///  contexto global ,x = 1
```

```javascript
console.log(bar); /// la variable var fue declarada antes de definirla, undefined
console.log(baz); /// la variable var fue declarada antes de definirla, undefined
foo();
function foo() {
  console.log('Hola!'); ///el codigo falla , no se declara el tipo de varibale que es baz antes de ejecutarla
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
  var instructor = 'Franco';
}
console.log(instructor); /// se visualiza franco ya que la condicion es true ,
```

```javascript
var instructor = 'Tony';
console.log(instructor); /// imprime Tony , contexto global
(function () {
  if (true) {
    var instructor = 'Franco';
    console.log(instructor); /// al ser true imprime Franco ya que es el contexto de la funcion
  }
})();
console.log(instructor); /// immprime Tony contextop global
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
  var instructor = 'The Flash';
  let pm = 'Reverse Flash';
  console.log(instructor); /// al ser true imprime the flash , contexto de la funcion
  console.log(pm); /// al ser true imprime the reverse flash , contexto de la funcion
}
console.log(instructor); /// imprime The flash ya que var tienen un alcance de función , si se declaran fuera de una función, un alcance global.

console.log(pm); /// imprime Franco porque las variables declaradas con let tienen un alcance de bloque, solo están disponibles dentro del bloque en el que se declaran
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
console.log(6 / '3'); /// 2
console.log('2' * '3'); /// 6
console.log(4 + 5 + 'px'); /// 9px
console.log('$' + 4 + 5); //$45 concatena el $ con el 4 y el 5
console.log('4' - 2); // 2
console.log('4px' - 2); // Nan (not a number 4px)
console.log(7 / 0); ///infinity , no se puede divir un numero por sero
console.log({}[0]); // propiedad inexistente de un objeto vacio
console.log(''[0]); /// cuando intentas acceder a un carácter en una posición específica de un string vacío o de un string que no tiene suficientes caracteres,devuelve undefined
console.log(parseInt('09')); /// 9 parseint transforma string a number
console.log(5 && 2); //Ambos operandos son evaluados como "truthy" porque tienen un valor distinto de 0, NaN, null, undefined, false o una cadena de texto vacía ''. Por lo tanto, cuando se evalúa la expresión 5 && 2, ambos operandos son "truthy" y el operador && devuelve el valor del segundo operando, que es 2.
console.log(2 && 5); //5
console.log(5 || 0); //5 ,  Retorna el valor del primer operando si es evaluado como "truthy" (valor que se considera verdadero en un contexto booleano). Si el primer operando es evaluado como "falsy", se devuelve el valor del segundo operando.

console.log(0 || 5); //5
console.log([3] + [3] - [10]); ///23 , concatena los 3 formando un arreglo de [33 ] y como el - no realiza ninguna funcion termina
console.log(3 > 2 > 1); //false , luego del 3 > 2 la condifcion se transforma en true , true =1 y no es mayor a 1
console.log([] == ![]); /// true , nada es igual no nada entonces es igual a true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
  console.log(a); /// UNDEFINED , se llama a antres de definirla
  console.log(foo()); /// la funcoin retorna 2 , si no retornaseria undefined

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
  if (food) {
    var snack = 'Friskies';
    return snack;
  }
  return snack;
}

getFood(false); //// undefined , no se declara el valor false
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
  fullname: 'Natalia Nerea',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); /// Aurelio De Rosa , obj.prop el fullaname es aurelio rosa , y ejecuta la funcion denrto del prop

var test = obj.prop.getFullname;

console.log(test()); /// undefined test no es una funcion
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
