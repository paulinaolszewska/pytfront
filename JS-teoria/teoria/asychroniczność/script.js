function loadImage(url){
    return new Promise((resolve,reject)=>{
        const img=new Image();
        img.addEventListener('load',event=>resolve(img));
        img.addEventListener('error', reason=>reject(new Error(`Failed to load ${url}`)))
        img.src=url
    })
}
loadImage("https://picsum.photos/id/237/200/300")
.then(img=>document.body.appendChild(img))
.catch(reason=>console.log(reason))

//promise chaining
const movies=[{id:1,category_id:1, movie_title:"Hello movie"}]
const movieCategories=[{id:1, name:"criminal"}]
function fetchMovie(id){
    return new Promise((resolve,reject)=>{
        const movie=movies.find(movie=>movie.id===id)
        movie?resolve(movie):reject(Error("movie not found"))
    })
}
function populateCategory(movie){
    return new Promise((resolve,reject)=>{
        const category=movieCategories.find(category=>category.id===movie.category_id)
        if (category){
            movie.category=category
            resolve(movie)
        }reject(Error("Category not found"))
    })
}
fetchMovie(1)
.then(movie=>populateCategory(movie))
.then(result=>console.log(result))
.catch(reason=>console.log(reason))

// async/await
//async powoduje, że funkcja zawsze zwraca obietnicę
async function foo(){
    return 1
}
foo().then(alert)

// await pozwala na szybkie odczytanie obietnicy, bez stosowania then i callbacków
async function foo2(){
    // słowo await powoduje, że JS zatrzymuje się i czeka, aż obietnica zostanie ustalona
    const promise=await new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('finished!',1000))
    })
    console.log(promise)
}
foo2()

const url="https://picsum.photos/id/237/200/300"
async function images(){
    try{
    const image=await loadImage(url)
    document.body.appendChild(image)
    }
    catch(err){
console.log(Error(err))
    }
}
images()