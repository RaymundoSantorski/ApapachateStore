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
