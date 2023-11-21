let producto = ["vino", "cerveza"];
producto.push("agua");

console.log(producto)

let cantidad, multiplicar, precioProducto;

producto = prompt("Ingrese producto: cerveza, vino, agua");
while (producto != "vino" && producto != "cerveza" && producto != "agua"){
    alert("Error, no se seleccionó un producto correcto");
    producto = prompt("Ingrese producto correcto: cerveza, vino, agua")
}
if(producto == "vino"){
    alert("Usted seleccionó " + producto + " a un valor de $1050 la unidad");
    precioProducto = 1050;
    cantidad = parseInt(prompt("Ingrese cantidad deseada"));
    multiplicar = (cantidad, precioProducto) =>cantidad * precioProducto;
    console.log("Usted seleccionó " + cantidad + "u. de " + producto + ". Costo total: $" + multiplicar(cantidad, precioProducto));
}
else if (producto == "cerveza"){
    alert("Usted seleccionó " + producto + " a un valor de $970 la unidad");
    precioProducto = 970;
    cantidad = parseInt(prompt("Ingrese cantidad deseada"));
    multiplicar = (cantidad, precioProducto) =>cantidad * precioProducto;
    console.log("Usted seleccionó " + cantidad + "u. de " + producto + ". Costo total: $" + multiplicar(cantidad, precioProducto));
}
else if (producto == "agua"){
    alert("Usted seleccionó " + producto + " a un valor de $840 la unidad");
    precioProducto = 840;
    cantidad = parseInt(prompt("Ingrese cantidad deseada"));
    multiplicar = (cantidad, precioProducto) =>cantidad * precioProducto;
    console.log("Usted seleccionó " + cantidad + "u. de " + producto + ". Costo total: $" + multiplicar(cantidad, precioProducto));
}

