const msg = 'Hola mundo';

console.log(msg);

const hero = {
    name: 'ironman',
    age: 45
}

hero.age = 50

console.log(hero.age + 1);

const a:number = 10;
let b:number   = 10;

function sayHello(msg: String){
    console.log(msg + ' ' + ' Pedro ')
}

//Funcion autoinvocada
(() => {

    const a:number = 10;
    console.log(a);
        
})()