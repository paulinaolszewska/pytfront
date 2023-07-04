// Pętla na tablicy

// Przykład1 wyświetlamy wiek użytkownika

// const usersAge = [19, 18, 15, 45, 34, 33, 25];

// for (let i = 0; i < usersAge.length; i++) {
// console.log(`użytkownik o indeksie ${i} jest w wieku ${usersAge[i]}`);
//  }

//  Przykład2 - obliczmy wiek użytkownika

const usersDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
const currentYear = 2021;

for (let i = 0; i < usersDateBirth.length; i++) {
  const userAge = currentYear - usersDateBirth[i];
  //  // console.log(userAge);
  console.log(`wiek użytkownika numer ${i + 1} to ${userAge}`);
}

//  Przykład3 - for + instrukcja warunkowe alert

const guest = [
  "piłkarz",
  "kucharz",
  "murarz",
  "programista",
  "polityk",
  "pisarz",
  "magazynier",
  "emeryt",
];
const names=["Anna","Maciej","Kornelia","Tomasz","Justyna"]

names.map(name=>{
  name[name.length-1]=="a"?console.log(`${name} jest kobietą`):console.log(`${name} jest mężczyzną`)
})


for (let i = 0; i < guest.length; i++) {
  if (guest[i] === "programista") {
    console.log(
      "przepraszam nie ma już miejsce (nie wpuszczać, (programiści to nudziarze - tylko nie mówić) "
    );
  } else if (guest[i] === "polityk") {
    console.log(
      "Ojej jaka szkoda, nie ma już miejsc (po żadnym pozorem nie wpuszczać! Zepsują każdą imprezę)"
    );
  } else {
    console.log("witamy Panie " + guest[i] + ", zapraszamy!");
  }
}
