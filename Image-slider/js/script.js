const images = Array.from(document.querySelectorAll(".card img"))
const container = document.querySelector(".container")
const popup = document.getElementById("pop")
const popImg = document.querySelector("#pop img")

const closeItem = document.getElementById("close")
const nextItem = document.getElementById("next")
const preItem = document.getElementById("pre")

const counter = document.createElement('div');
counter.style.position = "relative";
counter.style.bottom = "550px";
counter.style.right = "-140px";
counter.style.color = "white";
counter.style.fontSize =  "20px";
counter.style.background = "rgba(142, 142, 142, 0.5)";
counter.style.padding = "5px 10px";
counter.style.borderRadius = "5px";
counter.style.width = "40%";
counter.style.textAlign = "center";
popup.appendChild(counter);

let currentIndex=0

for(var i=0; i<images.length; i++)
{
    images[i].addEventListener('click', function(e) {
        currentIndex = images.indexOf(e.target)

        let currentSrc = e.target.getAttribute('src')
        popImg.setAttribute('src', currentSrc)
        popup.classList.remove("d-none")
        container.classList.add("blurred")
        updateCounter()
    })
}

closeItem.addEventListener("click", closeSlide)

function closeSlide() {
    popup.classList.add("d-none")
    container.classList.remove("blurred")
}

nextItem.addEventListener("click", nextSlide)

function nextSlide() {
    if(currentIndex === images.length-1) {
        currentIndex = 0
    }
    else {
        currentIndex++
    }
    let currentSrc = images[currentIndex].getAttribute('src')
    popImg.setAttribute('src', currentSrc)
    updateCounter()
}



preItem.addEventListener('click', preSlide)

function preSlide() {
    if(currentIndex === 0) {
        currentIndex = images.length-1
    }
    else {
        currentIndex--
    }
    let currentSrc = images[currentIndex].getAttribute('src')
    popImg.setAttribute('src', currentSrc)
    updateCounter()
}

document.addEventListener('keydown', function(e) {
    if(e.key == "ArrowRight") {
        nextSlide()
    }
    else if(e.key == "ArrowLeft") {
        preSlide()
    }
    else if(e.key == "Escape") {
        closeSlide()
    }
})

function updateCounter() {
    counter.textContent = `Slide ${currentIndex + 1} of ${images.length}`;
}