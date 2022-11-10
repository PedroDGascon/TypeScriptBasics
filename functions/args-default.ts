(() =>{

    // Estableciendo un valor por defecto upper: boolean = false

    const fullName = ( firstName: string, lastName?:string, upper: boolean = false  ): string =>{

        if(upper){

            return `${firstName} ${lastName || ' No lastName' } `.toUpperCase();
        }else{

            return `${firstName} ${lastName || ' No lastName' } `;
        }

        //return `${firstName} ${lastName || ' No lastName' } `;
    }

    //let noName: string;

    const name = fullName(' Tony ', ' Stark ', true);

    console.log({ name })

})()