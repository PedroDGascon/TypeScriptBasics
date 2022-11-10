(() => {

    const hero: string = 'Flash';

    //Es una buena practica indicar el tipo de dato que retorna :string o :number
    function returnName():string{
        return hero;
    }

    const activateBatisignal = ():string =>{

        return 'Batisenal Activada';
    } 

    console.log(typeof activateBatisignal);

    const heroName = returnName();

})()