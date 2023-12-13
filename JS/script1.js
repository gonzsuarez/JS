const containerProducts = document.getElementById('container-products');
const modal = document.getElementById('ventana-modal');
const carrito = document.getElementById('carrito');
const totalCarrito = document.getElementById('total');
const btnClose = document.getElementsByClassName('close')[0];
const containerCart = document.querySelector('.modal-body');
const iconMenu = document.getElementById('icon-menu');
const contenedorProductos = document.querySelector('.contenedor-carrito');
const cantidadProductos = document.querySelector('.count-products');
let productosCarrito = [];

class Producto {
    constructor(imagen, nombre, precio, id) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.cantidad = 1;
        this.subtotal = 0;
    }

    obtenerTotal() {
        this.subtotal = this.precio * this.cantidad;
    }
}
cargarEventos();

function cargarEventos() { 
    iconMenu.addEventListener("click", showMenu);
  
   document.addEventListener("DOMContentLoaded", () => { 
        renderizarProductos();
        cargarCarritoLS();
        mostrarProductosCarrito();
   });

   containerProducts.addEventListener("click", agregarProducto); 
   containerCart.addEventListener("click", eliminarProductos);

   carrito.onclick = function () {
       modal.style.display = 'block';
   };
   
   btnClose.onclick = function () {
       // modal.style.display = 'none';
       ocultarModal();
   };
   
   window.onclick = function (event) {
       if (event.target == modal) {
           // modal.style.display = 'none';
           ocultarModal();
           }
   };
}

    function eliminarProductos(e){
        if(e.target.classList.contains("eliminar-producto")) {
            const productoID = parseInt(e.target.getAttribute("id"));

           productosCarrito = productosCarrito.filter((producto) => producto.id !== productoID);
           guardarProductosLS();
           mostrarProductosCarrito();

        }
    }

    function cargarCarritoLS(){
        productosCarrito = JSON.parse(localStorage.getItem("productoLS")) || [];
    }

       function agregarProducto(e){
       e.preventDefault();

       if(e.target.classList.contains("agregar-carrito")) {
        const productoAgregado = e.target.parentElement;
       
        leerDatosProducto(productoAgregado);    
       }
   }
   
   function leerDatosProducto(producto){
       const datosProducto = new Producto(producto.querySelector("img").src, producto.querySelector("h4").textContent, 
       Number(producto.querySelector("p").textContent.replace("$", " ")), parseInt(producto.querySelector("a").getAttribute("id")));

       datosProducto.obtenerTotal();

       agregarAlCarrito(datosProducto);
}
   
   function agregarAlCarrito(productoAgregar){
       const existeEnCarrito = productosCarrito.some((producto) => producto.id === productoAgregar.id);
       if(existeEnCarrito) {
           const productos = productosCarrito.map((producto) => {
               if(producto.id === productoAgregar.id) {
                   producto.cantidad++;
                   producto.subtotal = producto.precio * producto.cantidad;
   
                   return producto;
               }
               else{
                   return producto;
               }
           });
           productosCarrito = productos;
       }
       else{
           productosCarrito.push(productoAgregar);
       }

       guardarProductosLS();
       mostrarProductosCarrito();
   } 

   function guardarProductosLS(){
    localStorage.setItem("productoLS", JSON.stringify(productosCarrito));
   }

   function mostrarProductosCarrito(){
        limpiarHTML();    

    productosCarrito.forEach((producto) => {
        const {imagen, nombre, precio, cantidad, subtotal, id} = producto;
        
        const div = document.createElement("div");
        div.classList.add("contenedor-producto");
        div.innerHTML = `
                        <img msrc="${imagen}" width="100">
                        <p>${nombre}</p>
                        <p>$${precio}</p>
                        <p>${cantidad}</p>
                        <p>$${subtotal}</p>
                        <a href="#" class = "eliminar-producto" id= "${id}"> X </a>
                        `;

            containerCart.appendChild(div);
    });
    mostrarCantidadProductos();
    calcularTotal();
   }

   function calcularTotal() {
    let total = productosCarrito.reduce((sumaTotal, producto) => sumaTotal + producto.subtotal, 0);

    totalCarrito.innerHTML = `Total a pagar: $ ${total}`;
   }

   function mostrarCantidadProductos(){
    let contarProductos;

    if(productosCarrito.length > 0){
        contenedorProductos.style.display = "flex";
        contenedorProductos.style.alignItems = "center";
        cantidadProductos.style.display = "flex";
        contarProductos = productosCarrito.reduce((cantidad, producto) => cantidad + producto.cantidad, 0);
        cantidadProductos.innerText = `${contarProductos}`;

    } else{
        contenedorProductos.style.display = "block";
        cantidadProductos.style.display = "none";
    }

}

   function limpiarHTML(){
    while(containerCart.firstChild) {
        containerCart.removeChild(containerCart.firstChild);
    }

}
   
   function ocultarModal() {
       modal.style.display = 'none';
   };

 

function showMenu() {
    let navbar = document.getElementById('myTopnav');

    // if (navbar.className === 'topnav') {
    //     navbar.className += ' responsive';
    // } else {
    //     navbar.className = 'topnav';
    // }

    navbar.className = navbar.className === 'topnav' ? (navbar.className += ' responsive') : (navbar.className = 'topnav');
}

function renderizarProductos(){
    productos.forEach(producto => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.innerHTML +=` 
        <img src="./img/${producto.img}" alt="${producto.nombre}" />
        <h4>${producto.nombre}</h4>
        <p>$${producto.precio}</p>
        <a id=${producto.id} class="boton agregar-carrito" href="#">Agregar</a>
        `;
        containerProducts.appendChild(divCard);

    });
}

Swal.fire({
    title: "Eres mayor de edad?",
    text: "Seguro!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Pero mas bien!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Perfecto!",
        text: "Puedes acceder al sitio.",
        icon: "success"
      });
    }
  });