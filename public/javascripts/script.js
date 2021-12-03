// alert('Hi')

//const { render } = require("ejs")



const divRest = document.querySelector("#divRest")
const btnRest = document.querySelector("#divRest")
const h2Name = document.querySelector("#h2Name")

btnRest.onclick = () =>
    fetch("restaurant")
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
    
function render(data)
{
    divRest.innerText = JSON.stringify(data)
    h2Name.innerText = data.name
}

