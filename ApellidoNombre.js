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

     addMascotas (nuevaMascota) { 
      
         this.mascotas.push(nuevaMascota);
         console.log (this.mascotas);
         }
     
     addCount (){
         console.log(this.mascotas.length)


     }

    addBook (libroNuevo){
        
         this.libro.push(libroNuevo)

         console.log(this.libro)


     }

     getBook (){
         
        this.libro.map(function(titulos){
            console.log(titulos.nombre)
            
           
        })

       

     }

 
}

const persona1 = new Usuario ("Nahuel","Valenzuela",[{nombre:"sjsdsada",autor:"dsadas"}],["Paul"]) 


console.log(persona1);
persona1.getFullName();
persona1.addMascotas("pepito");
persona1.addBook({nombre: "santa", autor:"claus"})
persona1.addCount()
persona1.getBook()



/*




Usuario.countMascotas()

console.log (Usuario.Libros)

*/
// 
