"use strict";
console.log('literal-types');
{
    function rollDice(dice) {
        let pip = 0;
        for (let i = 0; i < dice; i += 1) {
            pip += Math.floor(Math.random() * 5) + 1;
            console.log('pip', pip);
        }
        return pip;
    }
    console.log('rollDice', rollDice(3));
}
{
    function sendEvent(name, data) {
        console.log(`${name}: ${JSON.stringify(data)}`);
    }
    sendEvent('addToCart', { productId: 123123 });
}
const country1 = 'Latvia';
const country2 = 'Estonia';
const req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        Authorization: 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json',
    },
    body: {
        image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
    },
    method: 'POST',
};
console.group('Literal types - užduotys');
{
    console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const city1 = 'Munich';
        const city2 = 'Berlin';
        console.log({ city1, city2 });
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        const dogBreed1 = 'PitBull';
        const dogBreed2 = 'Doberman';
        console.log({ dogBreed1, dogBreed2 });
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const carPart1 = 'Axle';
        const carPart2 = 'Piston';
        const carParts = ['Battery', 'Piston', 'TirePressureGauge'];
        console.log({ carPart1, carPart2 });
        console.log(carParts);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=literal-types.js.map