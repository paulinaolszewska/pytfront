
// createElement pozwala na utworzenie elementu DOM, w tym przypadku div
const divElement = document.createElement('div')
// poprzez style.nazwawlasciwosci nadpisujemy style, inny zapisy el.style="margin-top:20px;"
divElement.style.marginTop = "20px"
// osadzamy element na końcu body, poprzez appendChild, możliwe osadzenie na poczatku poprzez prepend
document.body.appendChild(divElement);
// pobieramy konkretne dane z local storage i zamieniamy format json na tablicę
let divinations=JSON.parse(localStorage.getItem("divinations"))
divinations==null?divinations=['Pojedziesz na koniec świata', 'Wygrasz w lotka', 'Nic fajnego :p']:divinations
// w fukcji przekazujemy event kliknięcia, preventDefault() to metoda, która zapobiegnie w tym przypadku domyślnej wysyłce formularza z przeładowaniem strony
const handleAdd = e => {
	e.preventDefault()
  // pobieramy wszystkie elementy z DOM poprzez querySelector lub querySelectorAll
  const input=document.querySelector('input')
  // jako nową wróżbę przypisujemy zawartość inputu, to co wpisał użytkownik
	newDivination = input.value
  for(let i=0;i<divinations.length;i++){
    if(divinations[i]==newDivination){
      // czyszczenie inputu
      input.value=""
      return
    }
  }
  // wrzucamy do tablicy wróżbę uzytkownika
	divinations.push(newDivination)
  // zapisujemy w local storage nową tablicę, aby uzytkownik po przeładowaniu aplikacji miał dalej dostępne podane przez siebie wcześniej wróżby, tablicę zamieniamy na format jsosn JSON.stringify
  localStorage.setItem("divinations",JSON.stringify(divinations))
  input.value=""

	
}
const handleShow = () => {
  // random wylosuje nam jakąś liczbę z przedziału od 0 do <divinations.length, a floor obetnie nam wszystko, co jest po przecisnku, abysmy dostali liczbę całkowitą
 const nrEl=Math.floor(Math.random()*divinations.length)
 divElement.textContent=divinations[nrEl]
//  setTimeout przyjmuje 2 parametry: callback-funkcję, co ma się wydarzyć po pewnym czasie oraz drugi parametr-czas opóxnienia
 setTimeout(()=>divElement.textContent="",3000)
}
// join pozwolił nam rozdzielić elementy przecinkami
const handleShowDivinations = () => {
divElement.textContent=divinations.join(", ")
setTimeout(()=>divElement.textContent="",3000)
}
// pobieramy potrzebne elementy i ustawiamy nasłuchiwanie na zdarzenia kliknięcia
document.querySelector('.add').addEventListener('click', handleAdd)
document.querySelector('.show').addEventListener('click', handleShow)
document.querySelector('.showDivinations').addEventListener('click', handleShowDivinations)
document.querySelector('.reset').addEventListener('click', e => {
	e.preventDefault()
  // czyszczenie tablicy
	divinations.length = 0
  // czyszczenie localstorage
  localStorage.removeItem("divinations")
})