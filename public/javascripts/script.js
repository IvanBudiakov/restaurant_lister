const divRest = document.querySelector("#divRest")
divRest.classList.add('divRest');
const btnRest = document.querySelector("#btnRest")


const divRecord = document.createElement('div') 
divRecord.classList.add('divRecord');
var pageSize = "5"

        // setPageSize sets pageSize to the value selected from the dropdown list
function setPageSize(newSize)
{
    pageSize = newSize
}
        // onclick hadler which takes data from localhost:3000/restaurant
        // where pageSize = whatever is selected from the dropdown list
btnRest.onclick = () =>{
        fetch("restaurant?pageSize=" + pageSize)    // making sure we don't keep previous results
        .then(divRest.innerHTML='')
        .then(divRecord.innerHTML='')
        .then(response => response.json())
        .then(data => render(data))
        .catch(error=>alert(error))
}


function render(data)
{

    data.forEach(data=>{  
        
        const table = document.createElement('table')
        
        let h2Name = document.createElement('h2');
        let pAddress = document.createElement('p');
        let pBor = document.createElement('p');
        let pZip = document.createElement('p');

        h2Name.innerText = data.name
        pAddress.innerText = data.address.building + " " + data.address.street + ","
        pBor.innerText = data.borough + ","
        pZip.innerText = data.address.zipcode

            // header row of the table
        let thr = document.createElement('tr');
        let thd1 = document.createElement('th')
        let thd2 = document.createElement('th')
        let thd3 = document.createElement('th')

            // header row of the table
        thd1.innerText = 'Date'
        thd2.innerText = 'Score'
        thd3.innerText = 'Grade'

            // header row of the table
        thr.appendChild(thd1)
        thr.appendChild(thd2)
        thr.appendChild(thd3)

            // header row of the table
        table.appendChild(thr)
            // run through the foreach loop to create and fill the table
        data.grades.forEach(item => {   
                
                let tr = document.createElement('tr');
                let td1 = document.createElement('td')
                let td2 = document.createElement('td')
                let td3 = document.createElement('td')
                td1.innerText = item.date
                td2.innerText = item.grade
                td3.innerText = item.score

                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                
                table.appendChild(tr)
                
        })
        // append everything into an inner div
        divRecord.appendChild(h2Name)
        divRecord.appendChild(pAddress)
        divRecord.appendChild(pBor)
        divRecord.appendChild(pZip)
        divRecord.appendChild(table)
        // append inner div into an outer div
        divRest.appendChild(divRecord)
    })
    // displaying outer div
    document.body.appendChild(divRest)
}

console.log(pageSize)