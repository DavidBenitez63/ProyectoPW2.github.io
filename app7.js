const carrito=[];
const añadir = prompt("Elige un producto: ");
carrito.push(añadir);
while( confirm('deseas agregar esto al carrito')){

    const añadir = prompt("Añade otro producto");

    carrito.push(añadir);
}

console.log(carrito);


