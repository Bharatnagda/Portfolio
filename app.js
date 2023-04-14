async function callApi(){
    
    let result = await fetch("https://jsonplaceholder.typicode.com/photos");
    result = await result.json();
    console.warn(result);
    document.getElementById("userdata").innerHTML = result.map((users)=>
        `<tr>
        <img src="${users.url}" alt="">
        </tr>`
     ).join("");
    
}
async function full(){
    
    let result = await fetch("https://jsonplaceholder.typicode.com/photos");
    result = await result.json();
    document.getElementById("full").innerHTML = result.map((users)=>
        `<tr>
        <img src="${users.url}" alt="">
        </tr>`
     ).join("");
    
}

callApi();


/* .map((users)=>{
       `<tr>
       <td>${users[0]}</td>
       </tr>`;
    }).join("") */