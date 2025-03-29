let opslaanBtn = document.getElementById("evenement")
let evenet = document.getElementById("eventnaam")
let eventcontainer = document.getElementById("evenementgegevens")
let waar = document.getElementById("waar")
let wanneer = document.getElementById("wanneer")

function opslaan(){
  let eventGegevens= []
  eventGegevens.push({wat:evenet.value, waar:waar.value, wanneer:wanneer.value})
    localStorage.setItem("evenementContainer", JSON.stringify(eventGegevens) )
    console.log(eventGegevens)
  opslaanBtn.style.display = "none"
    if( opslaanBtn.style.display = "none"){
//      let txtI = document.createElement("h1")
//      let txtO = document.createTextNode(`${evenet.value}`)
// txtI.appendChild(txtO)
console.log(waar.value, wanneer.value)
eventcontainer.innerHTML += `
<h1>${evenet.value}</h1>
<ul style="list-style-type=none">
<li>Waar: ${waar.value}</li>
<li>Wanneer: ${wanneer.value}</li>
</ul>
`


    }

console.log(eventcontainer)
}
function getevent(){
  
 let getEvent =  JSON.parse(localStorage.getItem("evenementContainer"))
 getEvent.forEach(element => {
   console.log(element)
   eventcontainer.innerHTML += 

   `<ul >
   <li>wat: ${element.wat}</li>
 <li>Waar: ${element.waar}</li>
<li>Wanneer: ${element.wanneer}</li>
 </ul>
`
 })

}
