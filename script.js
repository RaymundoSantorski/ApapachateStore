var total=0

function info(precio)
{
	var n = total.toString
	return n
}

function add(precio, producto)
{
	var pro = document.createElement("label");
	pro.innerHTML = producto + " $" + precio
	document.querySelector(".items").appendChild(pro);
	
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
