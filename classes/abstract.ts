(() => {

    abstract class Mutante {

        constructor(

            public name: string,
            public realName: string

        ) { }

    }

    class Xmen extends Mutante {

        salvaMundo(){
                return 'Mundo a Salvo' 
        }

    }

    class Villian extends Mutante {

        conquistaMundo(){
            return 'Mundo conquistado' 
        }
    }


    const wolverine = new Xmen ('Wolverine',' Logan');
    const magneto = new Villian ('Magneto', 'Magnus');

   // console.log(wolverine.salvaMundo());
    // console.log(magneto.conquistaMundo());

    const printName = ( character: Mutante ) => {
        console.log( character.realName);
    }

    //? printName( wolverine);

    // Una clase abstracta no sirve para crear instacias, sirve para crear otras clases, o que otras clases sean extendidas de ella. 
    //  Tambien es util para asegurarme que un arrugmento esta siendo implementado correctamente. 

})()