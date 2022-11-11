(() =>{

    class Avenger {

        name;
        power;

        // Cuando creamos un constructor y no pasamos los parametros, por defecto los toma como 'Any'
        constructor(name = 'No name', power = 0) {

            this.name = name;
            this.power = power;

        }

    }

    const hulk = new Avenger('HULK', 9001)

    console.log(hulk);
    console.log(falcon);

    //Extendemos de una clase, para poder utilizar sus metodos e implementaciones.
    // De igual manera podemos agregar nuestra propia variable o dato con el que querramos diferenciar tomando en cuenta el constructor base

    class FlyingAvenger extends Avenger {

        flying;

        constructor( name, power ) {
            super(name, power) // Usamos super para poder extraer los datos 
            this.flying = true;
        }
 
    }

    const falcon = new FlyingAvenger('Falcon', 50)


} ) ()