const api = `https://forkify-api.herokuapp.com/api/search?q=`;
const loader = document.getElementById("loader");
const pasta = document.getElementById("pasta");
const pizza = document.getElementById("pizza");
const salad = document.getElementById("salad");
const beef = document.getElementById("beef");
const container = document.getElementById("container");
var cards = ``; 

window.addEventListener("load", function () {
    loader.classList.add("hidden");
});

pasta.addEventListener("click", () => {
    loader.classList.remove("hidden");
    xhr = new XMLHttpRequest();
    xhr.open("GET", api + "pasta");
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log(JSON.parse(xhr.response));
            generateCards(JSON.parse(xhr.response));
        }
    })
})

pizza.addEventListener("click", () => {
    loader.classList.remove("hidden");
    xhr = new XMLHttpRequest();
    xhr.open("GET", api + "pizza");
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            generateCards(JSON.parse(xhr.response));
        }
    })
})

beef.addEventListener("click", () => {
    loader.classList.remove("hidden");
    xhr = new XMLHttpRequest();
    xhr.open("GET", api + "beef");
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            generateCards(JSON.parse(xhr.response));
        }
    })
})

salad.addEventListener("click", () => {
    loader.classList.remove("hidden");
    xhr = new XMLHttpRequest();
    xhr.open("GET", api + "salad");
    xhr.send();
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            generateCards(JSON.parse(xhr.response));
        }
    })
})


function generateCards(res) {
    cards = ``;
    for (var i = 0; i < res.recipes.length; i++) {
        const img = res.recipes[i].image_url;
        const title = res.recipes[i].title;
        const publisher = res.recipes[i].publisher;

        cards += `<div class="w-[300px] border-2 m-5 p-4 flex flex-col items-center border-slate-500 hover:cursor-pointer hover:border-red-700 duration-300 rounded-xl text-white h-[400px] text-center">
                            <img class="pb-5 h-2/3" src="${img}" alt="" srcset="">
                            <h2 class="font-bold text-lg mb-5">${title}</h2>
                            <p class="text-slate-300 mb-auto">${publisher}</p>
                        </div>`
    }
    console.log(cards)
    container.innerHTML = cards;
    loader.classList.add("hidden");

}