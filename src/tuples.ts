/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ['Koridas', 'Atmazas'];
const person2: FullnameTuple = ['Paklodijus', 'Pagalvė'];
const person3: FullnameTuple = ['Višta', 'Maumedienė'];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
type PersonTuple = [string, number];
type Dog = {
  name: string,
  age: number,
  breed: 'Collie' | 'Dobermann',
};
type Person = {
  name: string,
  age: number
};
type FriendshipTuple = [Person, Dog];

type PointTuple = [number, number];
type TriangleTuple = [PointTuple, PointTuple, PointTuple];
// ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
{
  const person4: PersonTuple = ['Ninja', 24];
  const person5: PersonTuple = ['Yiu', 30];

  console.log(person4, person5);
}
console.groupEnd();

console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
{
  const friendShip1: FriendshipTuple = [{
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
  const triangle1: TriangleTuple = [[-1, -1], [1, 2], [3, 0]];
  const rightTriangle: TriangleTuple = [[-1, -2], [-2, -2], [1, 2]];

  console.log('triangle1', triangle1);
  console.log('rightTriangle', rightTriangle);
}
console.groupEnd();
}
console.groupEnd();
