codes = {
    "apple": 1234,
    "banana": 4011,
    "tomato": 4087
}

console.log(codes["banana"]);

x = document.createElement("h1")
x.innerHTML = "this is an element that i created in javascript"
document.getElementById("test").appendChild(x)

function newFeature() {
    //this is a new feature that does new stuff
    console.log("new feature");
}


function toggleText() {
    let text = document.getElementById("testButton").innerHTML
    if(document.getElementById("testButton").innerHTML === "Off") {
        document.getElementById("testButton").innerHTML = "On"
    } else {
        document.getElementById("testButton").innerHTML = "Off"
    }
}

var a = []
