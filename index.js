let opslaanBtn = document.getElementById("evenement")
let evenet = document.getElementById("eventnaam")
let eventcontainer = document.getElementById("evenementgegevens")
let waar = document.getElementById("waar")
let wanneer = document.getElementById("wanneer")

function opslaan(){
    console.log(opslaanBtn)
  opslaanBtn.style.display = "none"
    if( opslaanBtn.style.display = "none"){
     let txtI = document.createElement("h1")
     let txtO = document.createTextNode(`${evenet.value}`)
txtI.appendChild(txtO)

eventcontainer.appendChild(txtI)
    }
}