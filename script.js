var total=0

function info(precio)
{
	alert("El precio es $"+precio)
}

function add(precio, producto)
{
	var dv = document.createElement("div");
	dv.id = producto;
	dv.name = producto;
	dv.classList.add("it");
	var pro = document.createElement("label");
	var btn = document.createElement("button");
	btn.textContent = "X"
	btn.classList.add("boton");
	btn.addEventListener('click', function(){
		var eli = document.getElementsByName(producto);
		var pa = document.getElementById(producto);
		pa.remove(eli);
		total=total-precio;
		document.getElementById("total").innerHTML = "Total: $"+total;
	});
	document.querySelector(".items").appendChild(dv);
	pro.innerHTML = producto + " $" + precio
	dv.appendChild(pro);
	dv.appendChild(btn);
	
	total=total+precio
}

function cerrar(){
	var pop = document.getElementById("sucess");
	pop.classList.remove('active');
}

function carrito()
{
	document.getElementById("total").innerHTML = "Total: $"+total;
	var elemento = document.getElementById("overlay");
	elemento.classList.add('active');
}

function cerrarCarrito()
{
	var elemento = document.getElementById("overlay");
	elemento.classList.remove('active');
}

function sucess(name){
	document.getElementById("mensaje").innerHTML = "Gracias por tu compra "+name+"!";
	var men = document.getElementById("sucess");
	var over = document.getElementById("overlay");
	men.classList.add("active");
	over.classList.remove("active");
	total = 0;
	document.getElementById("total").innerHTML = null;
	var elim = document.getElementsByClassName("it");
	elim.remove();

}
