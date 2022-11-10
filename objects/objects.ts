(() => {


    //let flash: {} con las llaves indicamos que es un objeto, esto nos permite agregar datos tipo string, number, boolean, array

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {

        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    let superman: { name: string, age: number, powers: string[], getName?: () => string } = {

        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad']
    }



})() 


    /*flash = {

        name: 'Clark Kent ',
        age: 60,
        powers: ['Super Fuerza'],

        getName() {
            return this.name;
        }
    }

    console.log(flash.getName);
*/