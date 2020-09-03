var total=0

console.log("Hola, este es un script")

function info(precio)
{
	alert("El precio es $"+precio)
}

function add(precio)
{
	total=total+precio
}

function carrito()
{
	document.getElementById("total").innerHTML = total;
	var Overlay = document.getElementById("overlay");
	Overlay.classList.add('active');
}
