var app = angular.module("appTienda", ["ngAnimate","ngTouch"]);

app.controller("ctrlCategoria", ["datosCategoria", "datosProductos", function(datosCategoria, datosProductos){

	this.productosComprados = [];

	this.categoriaSeleccionada = {id:-1};

	this.categorias = datosCategoria.listarCategorias();

	this.productos = datosProductos.listarProductos();

	this.seleccionarCategoria = function(categoria) {
		this.categoriaSeleccionada = categoria;
	}

	this.seleccionarProducto = function(producto) {
		this.productoSeleccionado = producto;
	}


	this.numFotoActual = 0;

	this.seleccionarFoto = function(num) {
		this.numFotoActual = num;
	}

	this.estaSeleccionada = function(num) {
		return this.numFotoActual == num
	}

	this.fotoAnterior = function(){
		this.numFotoActual = this.numFotoActual>0 ? --this.numFotoActual : 0;
	}

	this.fotoSiguiente = function() {
		var totalFotos = this.productoSeleccionado.fotos.length;

		this.numFotoActual = this.numFotoActual < (totalFotos-1) ? ++this.numFotoActual : (totalFotos-1);
	}

	this.mostrarCarrito = false;

	this.comprar = function(){
		if(this.productoSeleccionado.stock>=this.cantidadAComprar) {
			var producto = {};
			producto.id = this.productoSeleccionado.id;
			producto.nombre = this.productoSeleccionado.nombre;
			producto.foto = this.productoSeleccionado.fotos[0].chica;
			producto.cantidad = this.cantidadAComprar;

			this.productosComprados.push(producto);

			this.actualizarStock(this.productoSeleccionado.id, this.cantidadAComprar);
			this.cantidadAComprar=0;

			alert("Se agregó al carrito de compras");
		} else {
			alert("No hay suficientes unidades en el stock.");
		}
	};

	this.actualizarStock = function(id, cantidad) {
		this.productos.forEach(function(elem){
			if(elem.id==id) {
				elem.stock-=cantidad;
			}
		});
	}


}]);
