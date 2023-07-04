// WARTOŚCI DOMYŚLNE W FUNKCJI (ES6)

// jeśli nie podamy argumentu na etapie wywołania to funckja weźmie argumenty domyślne

// Tworzenie funkcji z pomocą fat arrow
const addTwoNumbers = (x = 0, y = 0) => {
  const result = x + y;
  console.log(result);
  return result;
};

// Deklaracja funkcji (to samo ale inny sposób tworzenie)
// const addTwoNumbers = function(x = 0, y = 0) {
//  const result = x + y;
//  console.log(result);
//  return result;
// }

// Bez wartości domyślnych gdybyśmy nie podali argumentów otrzymalibyśmy undefined w miejscu ich wykorzystania.

/* ---------------------------------------- */

// CALLBACK
// Funkcja wywołania zwrotnego, czyli funkcja, przekazania jako argument do funkcji, i wywołana w niej.
// Funkcja do której przekazujemy inną funkcję (czyli nasz callback) nazywa sie funkcją wyższego rzędu.

//1. Przykład callback

function count(x, callback) {
  return callback(x);
}

function addOne(item) {
  item++;
  console.log(item);
  return item;
}

function subtractOne(number) {
  number--;
  console.log(number);
  return number;
}

// const result = count(5, addOne)
// count(5, addOne)

// 2. Przykład callback

const showClick = function () {
  console.log("click");
};

document.body.addEventListener("click", showClick);

//3. Przykład callback

const showTime = () => {
  console.log("minęły 2 sekundy");
};
setInterval(showTime, 2000);

//4. Przykład callback

const usersAge = [20, 30, 21, 17, 67, 96, 55];

// usersAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`));
// usersAge.forEach(function(userAge) { console.log("Wiek użytkownika to " + userAge); });

/* ----------------------------------------- */

// Jak sprawić by funkcja zachowywała się inaczej przy różnych argumentach

function showInfoAboutUser(age, name, sex) {
  if (arguments.length === 0) {
    console.log("nie mam żadnych informacji o tym użytkowniku");
  } else if (arguments.length === 1) {
    console.log("Użytkownik ma " + age + " lat. Nic więcej nie wiemy");
  } else if (arguments.length === 2) {
    console.log(`Użytkownik ma ${age} lat i ma na imię ${name}`);
  } else {
    console.log(`Użytkownik ma ${age} lat i ma na imię ${name} i jest ${sex}`);
  }
}
