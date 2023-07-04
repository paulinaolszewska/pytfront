// const el=document.querySelector("#header")
// const el=document.getElementById("header")
const el=document.querySelector("#header")
// console.log(el)
el.textContent="Witaj świecie!!!"
const text=[...document.querySelectorAll("p")]

console.log(text)
// text.textContent="blablabla"
text.forEach(item=>item.textContent="blablabla")
const container=document.querySelector(".container")
container.innerHTML="<p>hello hello hello</p>"
container.style.color="red"
container.classList.add("red")
console.log(container)
const handleClick=(e)=>{
    console.log(e)
    // container.textContent += " :) "
   e.target.textContent += " :) "
}
container.addEventListener("click",handleClick)
// TWORZENIE I DODAWANIE ELEMENTÓW
const pEl=document.createElement("p")
pEl.textContent="seventh heaven"
document.body.appendChild(pEl)