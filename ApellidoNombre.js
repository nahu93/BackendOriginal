class Usuario  {
    
    constructor(nombre,apellido,libro,mascotas)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libro;
        this.mascotas = mascotas;  
      
    };

    

    getFullName () {
        console.log (`hola mi nombre es ${this.nombre} ${this.apellido}`)
    }

     addMascotas (Bernardo) { 
      
         this.mascotas.push(nuevaMascota);
         console.log (this.mascotas);
         }
     
     addCount (){

     }

     addBook (){

     }
     getBook (){
         
     }

 
}

const persona1 = new Usuario ("Nahuel","Valenzuela",[{nombre:"sjsdsada",autor:"dsadas"}],["Paul"]) 


console.log(persona1);
persona1.getFullName();

console.log(this.Mascotas);



/*




Usuario.countMascotas()

console.log (Usuario.Libros)

*/
// 
