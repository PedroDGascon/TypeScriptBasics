(() => {


 // Interface = funciona simliar a usar el "type" y no tienen una representancion visual,  esta hecha para ayudarnos a restringir como lucen los objetos

 // Los "Type" no son extendibles  (extends from...)

 // Las "interface" si lo son, pero no define el comportamiento de una clase. 

    //! Interfaz basica
    interface Hero {

        name:string;
        age?: number;
        powers: string[];
        getName?: () => string;

    }
    

    let flash: Hero = {

        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {

        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],   
        getName(){
            return this.name;
        }
    }






}) ()