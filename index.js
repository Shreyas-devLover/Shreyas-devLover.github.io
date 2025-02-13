function next1(event){
    if(!document.getElementById("health").value || !(document.getElementById("Vegetarian").checked||document.getElementById("Non-Vegetarian").checked)) return
    event.preventDefault()
    document.getElementById("sec1").style.display = 'none'
    document.getElementById("sec2").style.display = "block"
}

function next2(event){
    document.getElementById("sec2").style.display = 'none'

    if
    document.getElementById("sec3").style.display = "block"
}