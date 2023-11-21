const Productos = [
    {id: 1, nombre: "Agua", precio: 840, img: "agua.jpg"},
    {id: 2, nombre: "Cerveza", precio:970, img: "cerveza.jpeg"},
    {id: 3, nombre: "Vino", precio: 1050, img: "vino.jpg"},
    {id: 4, nombre: "Whisky", precio: 2010, img: "whisky.jpg"},
];
Productos.push({id:5, nombre: "Jagermeister", precio: 4020, img: "jager.jpg"})
//Productos.forEach((elemento)=>{elemento.precio = elemento.precio*1.21;});
console.log(Productos);

function renderizarProductos() {
 for(const producto of Productos){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                    <img src="../img/${producto.img}" alt="${producto.nombre}" />
                    <div class="container">
                        <h4>${producto.nombre}</h4>
                        <p>$${producto.precio}</p>
                    </div>
    `;
    document.body.append(card);
}

}
renderizarProductos();

localStorage.setItem("Mensaje", "Bienvenido");
localStorage.setItem("CantProductos", 5);
sessionStorage.setItem("email", "canitala@gmail.com");
sessionStorage.setItem("Prod", JSON.stringify(Productos));

const CantProductos = Number(localStorage.getItem("CantProductos"));
console.log(typeof CantProductos);
localStorage.clear();

const filtro1 = Productos.filter((el) =>el.precio >=1200);
console.log(filtro1);



const precioActualizado = Productos.map((el) =>{
    return{
        nombre: el.nombre,
        precio: el.precio*1.21,
    };
} );

console.log(precioActualizado);