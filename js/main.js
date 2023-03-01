
class Persona {
    nombre;
    apellido;

    constructor() { }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }

    mostrardatos() {
        console.log(this.nombre, this.apellido, this.email)
        alert("Nos alegramos de tenerte otra vez, " + this.nombre + " " + this.apellido + "!")
    }

}

const persona1 = new Persona();
//Pidiendo datos
persona1.nombre = prompt("Ingresa tu nombre!")
persona1.apellido = prompt("Ingresa tu apellido!")

while (persona1.nombre === "" || persona1.nombre == null) {
    persona1.nombre = prompt("Coloque un nombre valido")
}
while (persona1.apellido === "" || persona1.apellido == null) {
    persona1.apellido = prompt("Coloque un apellido valido")
}
//Muestro datos
persona1.mostrardatos()
//Talle de zapatillas
let tallesZapatillas = ["36", "37", "38", "39", "40", "41", "42", "43"];

let talleSeleccionado = prompt("Por favor ingresa tu talle de calzado..")

if (tallesZapatillas.includes(talleSeleccionado)) {
    alert("Elegiste el talle: " + talleSeleccionado)

} else {
    talleSeleccionado = prompt("Talle no disponible, ingrese otro talle.")

}

//Zapatillas 
const stockZapatillas = [{
    id: 1,
    marca: "Adidas",
    precio: "$29000"
},
{
    id: 2,
    marca: "Nike",
    precio: "$37000",
},
{
    id: 3,
    marca: "Puma",
    precio: "$30000"
},
]
//Elegir marca y resultado
let elegirMarca;

do {
    elegirMarca = prompt("Que marca deseas? \n1) Adidas\n2) Nike \n3) Puma")
    var buscarMarca = stockZapatillas.find(stockZapatillas => stockZapatillas.id == elegirMarca)
    alert("El precio de tus zapatillas es de " + buscarMarca.precio)
    alert("Compraste zapatillas: " + buscarMarca.marca + "// Talle: " + talleSeleccionado)
} while (elegirMarca < 1 || elegirMarca > 3)


