(() => {

    class Avenger {

        constructor(


            public name: string,
            public realName: string,
        ) {
         // console.log('Constructor Avenger llamado')  
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {

        constructor(
            
            name: string,
            realName: string,  
            public isMutant:boolean
        ){
            super(name, realName)
            //console.log('Constructor Xmen Llamado')
        }

        get fullName(){
            return `${this.name} ${this.realName}`;
        }

        set fullName( name: string){
            
            if ( name.length < 3){
                throw new Error('El nombre debe de ser mayor de tres letras')
            }
            
            this.name = name;
        }

        getFullnameDesdeXmen(){
            //console.log ( super.getFullName() )
        }

    }

    const wolverine = new Xmen ('Wolverine', 'Logan', true)

    //console.log(wolverine);
    //wolverine.getFullnameDesdeXmen();

    //wolverine.fullName = 'pe'

   // console.log(wolverine.fullName);

    // Private significa que solo voy a poder acceder a un metodo o propiedad solo si se encuentra dentro de la clase donde esta definida.
    // Public significa que puedo acceder a un metodo o propiedad en cualquier lugar 
    // Protected  vamos a poder acceder a metodos y propiedades que se encuentran dentro de una clase.
    // Herencia
    // Extends
    // Que es un getter? es un metodo
    /* Que es un sette? es un metodo que recibe un valor un establece algo y ademas no recibe parametros y el getter si. 
    Ademas se puede implementar logica dentro del setter, lo que nos permite hacer comprobaciones con if, throw,    */

})()