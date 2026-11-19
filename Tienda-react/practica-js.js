const productos = [
 { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
 { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
 { id: 3, nombre: 'Monitor', precio: 300000, categoria: 'Perifericos', stock: 2 },
 { id: 4, nombre: 'Auriculares', precio: 150000, categoria: 'Perifericos', stock: 10 },
 { id: 5, nombre: 'Procesador', precio: 500000, categoria: 'Componentes', stock: 3 },
 { id: 6, nombre: 'Placa de video', precio: 800000, categoria: 'Componentes', stock: 1 },
 { id: 7, nombre: 'Memoria RAM', precio: 200000, categoria: 'Componentes', stock: 0 },
 { id: 8, nombre: 'Disco duro', precio: 250000, categoria: 'Componentes', stock: 4 },
 { id: 9, nombre: 'Fuente de poder', precio: 150000, categoria: 'Componentes', stock: 2 },
 { id: 10, nombre: 'Gabinete', precio: 100000, categoria: 'Componentes', stock: 5 }
];

//Producto modificado el 2
const productoModificado = {
  ...productos[1],
  precio: 65000,
  stock: 15
};

const { nombre, precio, stock } = productoModificado;

//Frase con Template Literal y Operador Ternario
console.log(
  `El producto ${nombre} ahora cuesta $${precio.toLocaleString('es-CO')} y su estado es: ${stock > 0 ? 'Disponible' : 'Agotado'}.`
);

//Comprobación de que el original no cambió
console.log('Original:', productos[1]);
console.log('Copia:', productoModificado);


//PRIMER COMMIT IMPORTANTE Y SIGNIFICATIVO DEL TALLER TENIENDO EN CUENTA LOS 30 QUE YA HICISMOS 
// ATT: ISMAEL PALENCIA BOLIVAR 3409610
//💕😁👍👍(●'◡'●)^_^~~~///(^v^)\\\~~~( *^-^)ρ(^0^* )👈(ﾟヮﾟ👈)b(￣▽￣)do(≧∀≦)o(❤️´艸｀❤️)(⓿_⓿)(. ❛ ᴗ ❛.)( ˘︹˘ )