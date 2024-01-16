const card = document.querySelector(".card");

const url ="https://api.github.com/users";

const xhr = new XMLHttpRequest();

xhr.open("Get",url)
// console.log(xhr.readyState)
xhr.onreadystatechange = function(){
    // console.log("reday state:",xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        data.map((item)=>{
            document.querySelector(".cards").innerHTML += `<div class="card">
                                                            <h1 class="user_name">${item.login}</h1>
                                                            <img  class="user_img" src=${item.avatar_url} alt=${item.login}/>
                                                        </div>` 
        })
    }
}
xhr.send()
