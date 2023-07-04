// pobieramy wszystkie potrzebne elementy DOM za pomocą querySelector lub querySelectorAll
const img=document.querySelector("img.slider");
const txt=document.querySelector("h1.slider");
// NodeList warto zamienić na tablicę, aby mieć więcej dostępnych metod
const dots=[...document.querySelectorAll(".dots span")];
// tworzymy tablicę obiektów do wyświetlenia kolejnych zdjęć i tekstów
const images=[{img:"images/img1.jpg", text:"Zakhyntos"},{img:"images/img2.jpg", text:"Pier"},{img:"images/img3.jpg",text:"Maledives"}];
let index=0;

const changeDot=()=>{
  // poszukujemy index elementu, który aktualnie posiada klasę active, funckja zwróci nam indeks
 const active=dots.findIndex(dot=>dot.classList.contains('active'));
//  usuwamy klasę ze znalezionego elementu i dodemy tę klasę do elementu o indeksie takim samym jak aktualnie wyświetlane zdjęcie oraz tekst
 dots[active].classList.remove('active');
 dots[index].classList.add('active');
}
const changeSlide=()=>{
  index++;  
  if(index===images.length){
    index=0;
  }
 img.src=images[index].img;
 txt.textContent=images[index].text;
 changeDot();
}
const btnChange=(e)=>{
    clearInterval(idInterval);
    // operator trójargumengowy, skrócenie if else
    e.target.className==="next"?index++:index--;
    if(index===images.length){
        index=0;
      }else if(index<0){
        index=images.length-1;
      }
      img.src=images[index].img;
     txt.textContent=images[index].text;
    changeDot();
    idInterval=setInterval(changeSlide,2000);

}
let idInterval=setInterval(changeSlide,2000);
// ustawienie nasłuchiwania na zdarzenie w pętli, na każdym elemencie
document.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",btnChange))