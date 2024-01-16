const ulList = document.getElementById("menu");
console.log(ulList)

ulList.addEventListener('click', (e) => {
    const res = confirm("Dou you want to delete this item")
    console.log(res)
    if (res === true && e.target.tagName === "IMG" && e.target.parentElement.tagName === "LI") {
        e.target.parentElement.style.display = "none";
    }
})


