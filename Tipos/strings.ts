(() =>{

    /* Identificar un dato como ANY y no como el tipo de dato que es, genera que no podamos llamar a los metodos (ingresando con el punto . ) */

    const batman: string = 'batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(` I'm ${ batman } `);
    console.log(batman.toUpperCase());

    // ? el simbolo de interrogacion se puede interpretar como un null check

    console.log(batman[10]?.toUpperCase() || ' No esta presente ') 


})()