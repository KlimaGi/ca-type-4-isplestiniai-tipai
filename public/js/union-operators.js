"use strict";
console.log('union operators');
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const accommodation1 = {
            type: 'House',
            address: 'Kubiku g. 14, Miestelenai'
        };
        const accommodation2 = {
            type: 'Flat',
            address: 'Lempu g. 47, Knigynai'
        };
        console.log({
            accommodation1,
            accommodation2,
        });
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car1 = {
            transmission: 'Automatic',
            brand: 'Tesla',
            model: 'x11'
        };
        const car2 = {
            transmission: 'Manual',
            brand: 'Toyota',
            model: 'y12'
        };
        console.log({ car1, car2 });
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const assets1 = [{
                type: 'House',
                address: 'Kubiku g. 14, Miestelenai'
            }, {
                type: 'Flat',
                address: 'Lempu g. 47, Knigynai'
            }];
        const assets2 = [{
                transmission: 'Automatic',
                brand: 'Tesla',
                model: 'x11'
            }, {
                transmission: 'Manual',
                brand: 'Toyota',
                model: 'y12'
            }];
        console.log(assets1);
        console.log(assets2);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=union-operators.js.map