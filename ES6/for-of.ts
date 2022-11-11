(() => {

    type Avenger = {

        name:string;
        weapon:string;

    }

    const ironman: Avenger = {

        name: 'Ironam',
        weapon: 'Armorsuit'
    }


    const capitanAmerica: Avenger = {

        name: 'Capitan America',
        weapon: ' Shield'
    }

    const thor: Avenger = {

        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor , capitanAmerica];

    // forma mas sencilla de recorrer arreglos con typeScript

    for (const avenger of avengers) {
        
        console.log (avenger.name, avenger.weapon,); // Podemos acceder a sus valores

    }


} ) ()