var total=0
console.log("Hola, este es un script")

function info(precio)
{
	alert("El precio es $"+precio)
}

function add(precio)
{
	total=total+precio
	var resul = "El total es $"+total;
	document.getElementById("total").innerHTML = resul;

}
