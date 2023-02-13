 let nombreIngreso = prompt("Ingrese su SteamID");

while (nombreIngreso == "" || nombreIngreso == null) {
    nombreIngreso = prompt("Coloque un nombre valido")
}

alert("Bienvenido " + nombreIngreso); 

function multiplicar(){
    let num1 = document.getElementById("num1").value;
    let multiplicacion = num1 * 1.75
    alert("El precio final es: " + multiplicacion)
}