
function toggleText() {
    let text = document.getElementById("testButton").innerHTML
    if(document.getElementById("testButton").innerHTML === "Off") {
        document.getElementById("testButton").innerHTML = "On"
    } else {
        document.getElementById("testButton").innerHTML = "Off"
    }
}