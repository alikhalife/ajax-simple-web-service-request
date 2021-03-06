
const quotes = document.getElementById("quote");
const authors = document.getElementById("author");
const photos = document.querySelector("img");

const refresh = document.getElementById("refresh");

refresh.addEventListener("click",() => {
    location.reload();
})


// one way of getting data
// fetch("https://thatsthespir.it/api")
// .then((Response) => {
//     return Response.json()
// })
// .then((data) => {
// console.log(data)
// })


//another way of getting data
async function getQuotes() {
    try {

    let data = await fetch("https://thatsthespir.it/api");
    let response = await data.json()

    //getting specific data from json file
    let quote = await response.quote;
    let author = await response.author;
    let photo = await response.photo;

    //displaying fetched data on my DOM elements
    quotes.innerHTML = "<q>" + quote + "</q>";
    authors.innerHTML = "- " + author;
    photos.src= photo;

    }

    catch (error) {
        console.log("Error")
    }

  
}

getQuotes()
.then(data => console.log(data));