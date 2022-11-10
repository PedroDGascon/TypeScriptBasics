(() =>{

    /* "never" no tiene que tener un punto alcanzable al finalizar la función. Generalmente
    termina con un error*/

    const error = (message: string):(never | number) =>{

        if(false){
            throw new Error(message)
        }

        return 1;
        

    }

    error('Auxilio!');
    console.log('Hola mundo')


})()