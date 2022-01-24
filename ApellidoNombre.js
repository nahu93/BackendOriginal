class Usuario  {
    
    constructor(nombre,apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido;
      
    };

      static Mascotas = ["Paul"]

      static Libros = [{
          nombre: "pichon",
          autor: "pishon",
        }]

     

    getFullName () {
        console.log (`hola mi nombre es ${this.nombre} ${this.apellido}`)
    }

 static addMascotas =  Usuario.Mascotas.push("Bernardo")

 static countMascotas () {console.log (Usuario.addMascotas) }

 static addBook = Usuario.Libros.push({
     nombre: "pushi",
     autor: "pollo"
    })
 
 static getbook () {
     
 }

}

const persona1 = new Usuario ("Nahuel","Valenzuela",) 


console.log(persona1);
persona1.getFullName();


console.log(Usuario.Mascotas)
Usuario.countMascotas()

console.log (Usuario.Libros)


// 
