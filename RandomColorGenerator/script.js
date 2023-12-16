const btn = document.getElementById("btn")
const colorText = document.getElementById("color-text")

const getRandomHexColor =()=>{
    const letter = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6 ; i++){
        color += letter[Math.floor(Math.random()* 16)]
    }
    return color
}

btn.addEventListener('click', ()=>{
    const randomColor = getRandomHexColor()
    document.body.style.backgroundColor = randomColor
    colorText.innerHTML = randomColor
    //console.log(randomNum)
})