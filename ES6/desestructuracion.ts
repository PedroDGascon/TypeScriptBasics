(() =>{

    //Desestructuración

    type Avengers = {

        
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }


    const avengers: Avengers = {

        nick: 'Samuel L. Jackson',
        ironman: ' Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    
    }

    // La desestructuración se trata de poder sacar los datos de un objeto

   /* const {poder, vision} = avengers
    console.log( poder.toFixed(2), vision.toUpperCase() );*/

    const printAvenger = ( {ironman, ...resto}: Avengers )=> {

        console.log( ironman, resto );
    }

    const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.15 ];

    // Para desestructurar un objeto usamos {} y para desestructurar un array []

    // la desestructuracion funciona mejor si tenemos definidos los tipos de datos, tratar de evitar el any.

    const [capi, ironman , esUnNumero ] = avengersArr;
    console.log({ ironman, capi })


} ) ()