(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower (id: number):string;

    }

    interface Human{
        age:number;

    }

    class Mutante implements Xmen, Human {
         public age: number;
         public name: string;
         public realName: string;

         mutanPower(id: number){
            return this.name + ' ' + this.realName;
         }
    }



})()