(() => {


    // Sirve para controlar la manera en la cual las instancias son ejecutadas, generalmente usado con el patron singleton.
    // Controla tambien como las nuevas clases van a ser creadas

    class Apocalipsis {
             
              //!Instancia
        static instance: Apocalipsis;

        constructor (public name: string){

        
        }

        //Esto es el principio Singleton. Basicamente cada vez que se quiere utilizar la clase siempre va a ser la misma //?instancia que se creo

        static callApocalipsis (): Apocalipsis {
            if ( !Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis ('Soy apocalipsis el unico')
            }

            return Apocalipsis.instance;
        }

        changeName( newName:string): void{
            this.name = newName;
        }

    }

                        // Se esta llamando el metodo statico 
    const apocalipsis = Apocalipsis.callApocalipsis();

    
    const apocalipsis1 = Apocalipsis.callApocalipsis();

    const apocalipsis2 = Apocalipsis.callApocalipsis();

    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Xavier');
    
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    
    //console.log(apocalipsis)

})()