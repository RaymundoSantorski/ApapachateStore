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
	var elemento = document.getElementById("overlay");
	elemento.classList.add('active');
}
