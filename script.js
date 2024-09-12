const container=document.querySelector("#container");
const tablica=document.querySelector("#tablica");

let row;
let cell;
const but=document.querySelector("#but");

but.onclick=function getNumbers()
{
    var rowCount = tablica.rows.length;
    for (let k = 0; k < rowCount; k++) {
        tablica.deleteRow(row);
    }

    let a=prompt("Enter number of rows");
    let b=prompt("Enter number of columns");
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    for(let i=0;i<a;i++){
        row=document.createElement("tr");
        tablica.appendChild(row);

        for(let j=0;j<b;j++){
            cell=document.createElement("td");
            row.appendChild(cell); 
            let kucica=document.createElement("div");
            kucica.setAttribute("class","kucica");
        
        
            let r = randomBetween(0, 255);
            let g = randomBetween(0, 255);
            let b = randomBetween(0, 255);
            let redgreenblue = `rgb(${r},${g},${b})`;

            kucica.style.backgroundColor=redgreenblue;

            cell.appendChild(kucica);
        }
    }
}


