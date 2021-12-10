// alert('Hi')

const divRest = document.querySelector("#divRest")
const btnRest = document.querySelector("#btnRest")
const h2Name = document.querySelector("#h2Name")
const pAddress = document.querySelector("#pAddress")
const pBor = document.querySelector("#pBor")
const pZip = document.querySelector("#pZip")



btnRest.onclick = () =>
console.log('button is pressed')
    fetch('restaurant')
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
    
function render(data)
{
   // divRest.innerText = JSON.stringify(data)
    h2Name.innerText = data.name
    pAddress.innerText = data.address.building + " " + data.address.street + ","
    pBor.innerText = data.borough + ","
    pZip.innerText = data.address.zipcode

    var table = document.createElement('table')

    data.grades.forEach(item => {
        var tr = document.createElement('tr');   

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        td1.innerText = item.date
        td2.innerText = item.grade
        td3.innerText = item.score

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        table.appendChild(tr)
            
    })
    document.body.appendChild(table)
}