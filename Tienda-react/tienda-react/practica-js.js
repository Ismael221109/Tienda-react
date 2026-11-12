function calcularPromedio(nota1,nota2,nota3) {
const total = (nota1+nota2+nota3)/3;
return total;
}
const resultado = calcularPromedio(4,2,5);
console.log("El promedio del estudiante es", Math.round(resultado));

//La diferencia entre console.log y return 
//El console.log es para imprimir dentro de la consola y
// El return es para retornar un valor desde una funcion