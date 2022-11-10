(() =>{

    /* EL OPERADOR REST ES ' ... ' TRES PUNTOS, se define como any por defecto, lo ideal es definir su tipo de dato
    si colocamos un tipo de valor  For example ...restArgs: number [], 
    los valores del arreglo que vengan adelante seran tomados como numeros, por eso se debe definir correctamente el tipo */ 

    const fullName = ( firstName: string, ...restArgs: string[] ):string =>{
        return `${ firstName } ${restArgs.join('')}`;
    }

    const superman = fullName ('Clark','Joseph','Kent');

    console.log({superman})


})()