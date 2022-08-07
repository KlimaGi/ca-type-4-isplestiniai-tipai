"use strict";
const person1 = ['Koridas', 'Atmazas'];
const person2 = ['Paklodijus', 'Pagalvė'];
const person3 = ['Višta', 'Maumedienė'];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const person4 = ['Ninja', 24];
        const person5 = ['Yiu', 30];
        console.log(person4, person5);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const friendShip1 = [{
                name: 'Brigit',
                age: 24,
            }, {
                name: 'Bark',
                age: 5,
                breed: 'Dobermann',
            }];
        console.log('friendShip1', friendShip1);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[-1, -1], [1, 2], [3, 0]];
        const rightTriangle = [[-1, -2], [-2, -2], [1, 2]];
        console.log('triangle1', triangle1);
        console.log('rightTriangle', rightTriangle);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map