const searchField = document.getElementById("searchField");

searchField.addEventListener("onkeyup", (e)=>{
    console.log(e.target.value);
})

const data = [

    "HTML",
    "CSS",
    "Javascript",
    "Git",
    "Nodejs",
    "Reactjs",
    "Expressjs",
    "MongoDB",
    "Gitlab",
    "Github",
    "Devops",
    "AI",
    "ML",
    "Java",
    "Python",
    "C++",
    "C#",
    "C",
    "GoLang",
    "Redis",
    "GraphQL",
    "Nextjs",
    "ReduxToolkit"
]

function handleSearch(data){
    const filerted = data.filter((item)=>{
        item.lowerCase().includes()
    })
}