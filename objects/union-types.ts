(() => {

    type Hero = {

        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;

    }

    //typescript siempre va a tratar de inferir el tipo de dato el cual estamos usando, aunque no lo tengamos denifido
    
    let myCustomVariable: (string | number | Hero) = ' Fernando ';
    console.log(myCustomVariable);

    myCustomVariable = 20
    console.log(myCustomVariable);

    myCustomVariable = {

        name: 'Bruce',
        age: 43,
        powers: [1]
    }

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);



})()

