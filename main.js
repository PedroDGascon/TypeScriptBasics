"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super Velocidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutante {
        mutanPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Pedro',
        age: 25,
        address: {
            id: 125,
            zip: ' KY2 SUD ',
            city: ' Ottawa '
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 125,
            zip: 'KY3 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
});
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map