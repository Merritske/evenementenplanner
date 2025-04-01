let opslaanBtn = document.getElementById("evenement")
let evenet = document.getElementById("eventnaam")
let eventcontainer = document.getElementById("evenementgegevens")
let waar = document.getElementById("waar")
let wanneer = document.getElementById("wanneer")
let eventGegevens= []
let eventTonen = document.getElementById("gegevensTonen")

function opslaan(){

  eventGegevens.push({wat:evenet.value, waar:waar.value, wanneer:wanneer.value})
    localStorage.setItem("evenementContainer", JSON.stringify(eventGegevens) )
    console.log(eventGegevens)
  opslaanBtn.style.display = "none"
    if( opslaanBtn.style.display = "none"){
//      let txtI = document.createElement("h1")
//      let txtO = document.createTextNode(`${evenet.value}`)
// txtI.appendChild(txtO)
console.log(waar.value, wanneer.value)
// eventcontainer.innerHTML += `
// <h1>${evenet.value}</h1>
// <ul style="list-style-type=none">
// <li>Waar: ${waar.value}</li>
// <li>Wanneer: ${wanneer.value}</li>
// </ul>
// `
    }

console.log(eventcontainer)
}
  console.log(eventTonen)
function getevent(){
  console.log(eventcontainer)
 let getEvent =  JSON.parse(localStorage.getItem("evenementContainer"))
 console.log(getEvent)

 getEvent.forEach(element => {

//   eventTonen.appendChild('ul')
//  let item = list.appendChild('li')
//  let itemInhoud = item.textContent(element)

//om de datum juist te zetten volgens onze notatie, uitgeschreven met voluit de maanden!!!
//getdate() - getMonth() -getYear()
eventTonen.innerHTML +=
   `<ul>
   <li>wat: ${element.wat}</li>
 <li>Waar: ${element.waar}</li>
<li>Wanneer: ${element.wanneer}</li>
 </ul>
`
// console.log(itemInhoud)
 })

}

function voegTaakToe(){
  console.log("taak toegevoegd")
}

