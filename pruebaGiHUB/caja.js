const listaPedidos = [];

function agregarPedido() {
    const inputNombre = document.getElementById("nombrePedido");
    const inputPrecio = document.getElementById("precioPedido");
    const selectArticulo = document.getElementById("articulo");

    let nombre = "";
    let precio = 0;

    // 1. Si existen campos de texto manuales
    if (inputNombre && inputPrecio && inputNombre.value.trim() !== "") {
        nombre = inputNombre.value.trim();
        precio = Number(inputPrecio.value);
    } 
    // 2. Si se selecciona desde el <select id="articulo"> del HTML
    else if (selectArticulo && selectArticulo.value !== "") {
        const productos = getProducts();
        const seleccionado = productos.find(p => p.id === selectArticulo.value);
        if (seleccionado) {
            const promocion = getPromotion();
            nombre = seleccionado.name;
            precio = (promocion && promocion.active)
                ? seleccionado.price - (seleccionado.price * promocion.discount / 100)
                : seleccionado.price;
        }
    }

    if (!nombre || precio <= 0 || isNaN(precio)) {
        alert("Ingresa o selecciona un artículo válido.");
        return;
    }

    listaPedidos.push({
        nombre: nombre,
        precio: precio
    });

    mostrarPedidos(listaPedidos);

    if (inputNombre) inputNombre.value = "";
    if (inputPrecio) inputPrecio.value = "";
    if (selectArticulo) selectArticulo.value = "";
}

function mostrarPedidos(pedidosAMostrar) {
    const ul = document.getElementById("listaPedidos");
    if (!ul) return;

    ul.innerHTML = "";

    // Destructuring al recorrer elementos
    pedidosAMostrar.forEach(producto => {
        const { nombre, precio } = producto;
        const li = document.createElement("li");
        li.textContent = ${nombre} - $${precio.toFixed(2)};
        ul.appendChild(li);
    });

    // Reduce para subtotal
    const subtotalCalculado = listaPedidos.reduce((acumulador, producto) => {
        const { precio } = producto;
        return acumulador + precio;
    }, 0);

    const ivaCalculado = subtotalCalculado * 0.16;
    const totalCalculado = subtotalCalculado + ivaCalculado;

    // Actualización segura del DOM
    const subtotalEl = document.getElementById("subtotal");
    const ivaEl = document.getElementById("iva");
    const totalEl = document.getElementById("total");

    if (subtotalEl) subtotalEl.textContent = subtotalCalculado.toFixed(2);
    if (ivaEl) ivaEl.textContent = ivaCalculado.toFixed(2);
    if (totalEl) totalEl.textContent = totalCalculado.toFixed(2);
}

function filtrarPedidos() {
    const filtroInput = document.getElementById("filtroPedido");
    if (!filtroInput) return;

    const textoBusqueda = filtroInput.value.toLowerCase();

    const pedidosFiltrados = listaPedidos.filter(producto => {
        const { nombre } = producto;
        return nombre.toLowerCase().includes(textoBusqueda);
    });

    mostrarPedidos(pedidosFiltrados);
}
