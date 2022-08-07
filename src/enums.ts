/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

console.log('enums');
{
  enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    loaded = 'loaded',
  }

  const englishLoadingStates = {
    [LoadingState.beforeLoad]: 'Before Load',
  };

  const IsLoading = (state: LoadingState) => state === LoadingState.loading;

  console.log('', IsLoading(LoadingState.beforeLoad));
}

/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams.
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
}

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
}

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'treciadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'sestadienis',
  Sunday = 'sekmadienis',
}

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↓↓↓↓
  enum LithuanianCity {
    Vilnius = 'Vilnius',
    Kaunas = 'Kaunas',
    Klaipeda = 'Klaipeda',
    Siauliai = 'Siauliai',
    Panevezys = 'Panevezys',
  }

  enum LargestCounties {
    China,
    India,
    UnitedStates,
    Indonesia,
    Pakistan,
  }

  enum StrongestEconomies {
    UnitedStates = 1,
    China,
    Japan,
    Germany,
    UnitedKingdom,
  }
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius aprašykite čia ↑↑↑↑

  console.group('1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.');
  {
    const city1: LithuanianCity = LithuanianCity.Vilnius;
    const city2: LithuanianCity = LithuanianCity.Kaunas;

    console.log({ city1, city2 });
  }
  console.groupEnd();

  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    const largestCountries: LargestCounties[] = [LargestCounties.China, LargestCounties.India];
    console.log('largestCountries', largestCountries);
  }
  console.groupEnd();

  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    const strongestEconomies: StrongestEconomies[] = [
      StrongestEconomies.UnitedStates,
      StrongestEconomies.China,
      StrongestEconomies.Japan,
      StrongestEconomies.Germany,
      StrongestEconomies.UnitedKingdom,
    ];
    console.log('strongestEconomies', strongestEconomies);
  }
  console.groupEnd();
}
console.groupEnd();
