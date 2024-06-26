// Setting Value
let lightOn = false

// Clicky Thingy (On)
function toggleLight() {
    if (lightOn == false) {
    lightOn = true
document.getElementById("html").style.backgroundColor = "white"
document.getElementById("bulbOn").style.visibility = "visible"
document.getElementById("bulbOff").style.visibility = "hidden"
document.getElementById("name").style.color = "black"
document.getElementById("header").style.color = "black"
document.getElementById("paragraph").style.color = "black"
return
} 

// Clicky Thingy (Off)
 if (lightOn == true) {
     lightOn = false
document.getElementById("html").style.backgroundColor = "black"
document.getElementById("bulbOn").style.visibility = "hidden"
document.getElementById("bulbOff").style.visibility = "visible"
document.getElementById("name").style.color = "white"
document.getElementById("header").style.color = "white"
document.getElementById("paragraph").style.color = "white"
return
}
}