

 fecthData = async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await data.json();
    
}

fecthData()