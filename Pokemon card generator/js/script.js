const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");
const typeColor = {
    normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD'
}

let getPokeData = function() {
    let id = Math.floor(Math.random() * 150) + 1;
    let finalUrl = url + id;

    let xmlReq = new XMLHttpRequest;
    xmlReq.open("GET", finalUrl);
    xmlReq.send();
    xmlReq.addEventListener("readystatechange", function() {
        if(xmlReq.readyState == 4 && xmlReq.status == 200) {
            generateCard(JSON.parse(xmlReq.response));
        }
    })
}

let generateCard = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    const themeColor = typeColor[data.types[0].type.name]
    // console.log(themeColor)
    
    card.innerHTML = `<p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src="${imgSrc}" alt="">
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
            
            </div>
            <div class="stats">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${statDefense}</h3>
                    <p>defense</p>
                </div>
                <div>
                    <h3>${statSpeed}</h3>
                    <p>speed</p>
                </div>
            </div>`;

    appendTypes(data.types);
    styleCard(themeColor);  
}

let appendTypes = (types) => {
    // console.log(types);
    types.forEach((item) => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    })
}

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 40%, #ffffff 40%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
        typeColor.style.backgroundColor = color;
    });
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);