(() => {

    /*
        class Avenger {
    
            ?Propiedades y nivel de acceso
    
            private name: string;
            private team: string;
            public realName?: string;
            static avgAge: number;
    
            ?Constructor de la clase.
    
            constructor ( name: string, team: string, realName?: string) {
                
    
    
             ? Forma clasica de utilizar el constructor
               //this.name = name;
                //this.team = team;
                //this.realName = realName;
    
            }
    
        }
            */
    class Avenger {

        // Propiedades y nivel de acceso, las sacamos y las introducimos directamente al cosntructor

        //private name: string;
       // private team: string;
       // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }

        //Constructor de la clase - FORMA USADA A NIVEL LABORAL.

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
            
        ) {}

        bio(){
            return `${ this.name} (${this.name})`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman)

    //Los metodos o propiedades estaticas solo pueden ser accedidas a ellos usando el nombre de la clase y no mediante instancias de la misma.
    console.log(Avenger.getAvgAge() );

})()