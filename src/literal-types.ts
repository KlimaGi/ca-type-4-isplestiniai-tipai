/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.log('literal-types');
// ???
{
  function rollDice(dice: 1 | 2 | 3): number {
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
  function sendEvent(name: 'addToCart', data: { productId: number }): void;
  function sendEvent(name: 'checkout', data: { cartCount: number }): void;
  function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
  }
  sendEvent('addToCart', { productId: 123123 });
}

/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country1: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

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
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
type Berlin = 'Berlin';
type Hamburg = 'Hamburg';
type Munich = 'Munich';
type Cologne = 'Cologne';
type Frankfurt = 'Frankfurt';
type GermanyCity = Berlin | Hamburg | Munich | Cologne | Frankfurt;

type Collie = 'Collie';
type Doberman = 'Doberman';
type Basenji = 'Basenji';
type PitBull = 'PitBull';
type JackRussellTerrier = 'JackRussellTerrier';
type DogBreed = Collie | Doberman | Basenji | PitBull | JackRussellTerrier;

type TirePressureGauge = 'TirePressureGauge';
type Piston = 'Piston';
type Axle = 'Axle';
type Battery = 'Battery';
type Headlights = 'Headlights';
type CarPart = TirePressureGauge | Piston | Axle | Battery | Headlights;

// ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
{
  const city1 : GermanyCity = 'Munich';
  const city2 : GermanyCity = 'Berlin';

  console.log({ city1, city2 });
}
console.groupEnd();

console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
{
  const dogBreed1 : DogBreed = 'PitBull';
  const dogBreed2 : DogBreed = 'Doberman';

  console.log({ dogBreed1, dogBreed2 });
}
console.groupEnd();

console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
{
  const carPart1 : CarPart = 'Axle';
  const carPart2 : CarPart = 'Piston';
  const carParts: CarPart[] = ['Battery', 'Piston', 'TirePressureGauge'];

  console.log({ carPart1, carPart2 });
  console.log(carParts);
}
console.groupEnd();
}
console.groupEnd();
