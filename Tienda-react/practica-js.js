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

const hayAgotados = productos.some(producto => producto.stock === 0);

const hayCostosos = productos.some(producto => producto.precio > 1000000);

const preciosValidos = productos.every(producto => producto.precio > 0);

const stocksValidos = productos.every(producto => producto.stock >= 0);

const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);

console.log('¿Existe algún producto agotado?:', hayAgotados);
console.log('¿Existe algún producto > $1.000.000?:', hayCostosos);
console.log('¿Todos tienen precio > 0?:', preciosValidos);
console.log('¿Todos tienen stock >= 0?:', stocksValidos);
console.log('Valor total del inventario: $' + valorInventario.toLocaleString('es-CO'));