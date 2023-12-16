// const plusBtn = document.querySelectorAll(".plusBtn")
// const accordianPara = document.querySelectorAll(".accordian-para")
// console.log(plusBtn)
// let toggle = false

// plusBtn.forEach((item, index)=>{
//     item.addEventListener('click',()=>{
//         // if(accordianPara[index] === index ){
//             toggle = !toggle
//             accordianPara[index].style.display = toggle ? "block":"none"
//             item.classList.toggle("transformProp")
//         // } 
//     })
// })


const accordionBox = document.querySelectorAll('.accordion-box')
console.log(accordionBox)

accordionBox.forEach((item) => {
    
    item.addEventListener('click', function(){
        for(let i=0; i<accordionBox.length; i++){
                item.classList.toggle('active')
        }
    })
})
