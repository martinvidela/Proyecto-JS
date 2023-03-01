
class Persona{
    nombre;
    apellido;
    email;

    constructor() {}
    setNombre(nombre){
        this.nombre = nombre;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
  
    mostrardatos(){
        console.log(this.nombre, this.apellido, this.email)
        alert("Nos alegramos de tenerte otra vez, " + this.nombre + " " + this.apellido + "!")
    }

}

const persona1 = new Persona();


persona1.nombre = prompt("Ingresa tu nombre!")
persona1.apellido = prompt("Ingresa tu apellido!")

while (persona1.nombre == "" || persona1.nombre == null) {
    persona1.nombre = prompt("Coloque un nombre valido")
}
while (persona1.apellido == "" || persona1.apellido == null) {
    persona1.apellido = prompt("Coloque un apellido valido")
}

persona1.mostrardatos()

