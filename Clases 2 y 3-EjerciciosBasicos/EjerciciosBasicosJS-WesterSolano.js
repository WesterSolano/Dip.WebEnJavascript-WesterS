const prompt = require('prompt-sync')();

//EJERCICIO # 1 -Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (console.log).
/*console.log('Hello World')*/

//EJERCICIO # 2 -Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
/*console.log('La suma de 3 + 5 = ',3 + 5)*/

//EJERCICIO # 3 -Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.
/*var nombre = prompt('Favor introduzca su nombre por teclado: ')
console.log("Hola ",nombre,", saludos desde la web!")
*/

//EJERCICIO # 4 -Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
/*var n1 = parseFloat(prompt('Digite un numero por teclado: '))
var n2 = parseFloat(prompt('Digite otro numero por teclado: '))
console.log("La suma de ",n1," + ",n2," = ",parseFloat(n1)+parseFloat(n2))
*/

//EJERCICIO # 5 -Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
/*var n1 = parseFloat(prompt('Digite un numero por teclado: '))
var n2 = parseFloat(prompt('Digite otro numero por teclado: '))
if(n1 > n2)
{
    console.log("El numero ",n1," es mayor que ",n2)
}
else
{
    console.log("El numero ",n2," es mayor que ",n1)
}
*/

//EJERCICIO # 6 -Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
/*var n1 = parseFloat(prompt('Digite un numero por teclado: '))
var n2 = parseFloat(prompt('Digite otro numero por teclado: '))
var n3 = parseFloat(prompt('Digite otro numero por teclado: '))

if(n1 > n2 && n1 > n3)
{
    console.log("El numero ",n1," es mayor que ",n2," y ",n3)
}
else if(n2 > n1 && n2 > n3)
{
    console.log("El numero ",n2," es mayor que ",n1," y ",n3)
}
else
{
    console.log("El numero ",n3," es mayor que ",n1," y ",n2)
}
*/

//EJERCICIO # 7 -Escribe un programa que pida un número y diga si es divisible por 2.
/*
var n1 = parseFloat(prompt('Digite un numero por teclado: '))
if(n1 % 2 ===0)
{
    console.log('El numero ',n1,' es divisible por 2')
}
else
{
    console.log('El numero ',n1,' No es divisible por 2')
}
*/

//EJERCICIO # 8 -Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).
var n1 = parseFloat(prompt('Digite un numero por teclado: '))
var conta=0;
for(i = 0; i <= n1; i++)
{
    if(n1 % i === 0)
    {
        console.log("Numero = ",parseFloat(n1),", divisor = ",parseFloat(i))
        conta +=1
    }
}

if(conta ===2)
{
    console.log('\n\tEl numero ',n1,' es primo.\n')
}
else
{
    console.log('\n\tEl numero ',n1,' No es primo.\n')
}
