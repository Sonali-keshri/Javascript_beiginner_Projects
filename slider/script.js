const slides = document.querySelectorAll(".slide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `^${index * 100}%`
})

const goPrev = () => {
    counter--
    alert("jkhkh")
    // slideImage()
}

prev.addEventListener("click", function{
    alert("vwekbvweb")
})


next.addEventListener("click", ()=>{
    alert("vwekbvweb")
})
const goNext = () => {
    counter++
    // slideImage()
    alert("jkhkh")
}
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}