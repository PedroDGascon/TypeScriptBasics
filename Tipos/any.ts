(()=>{

    //let avenger: any = 123;
    //let avenger: number;

    let avenger: any = 123;
    //const exists;
    let power;

    avenger = 'Dr Strange';
    //console.log(avenger.charAt(0)); 
    
    //casteando del dato y trasnformandolo a string
    console.log( (avenger as string).charAt(0) );

    avenger = 150.232356;

    //console.log(avenger.toFixed(2));

    //casteando del dato y trasnformandolo a number

    console.log(<number> avenger.toFixed(2));
 
 //   console.log(exists);
    console.log(power);


})()