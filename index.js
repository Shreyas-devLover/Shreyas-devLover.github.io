function next1(event) {
    if (!document.getElementById("health").value || !(document.getElementById("Vegetarian").checked || document.getElementById("Non-Vegetarian").checked)) return
    event.preventDefault()
    if (document.getElementById("Vegetarian").checked) {
        document.getElementById("sec4").style.display = "block"
        document.getElementById("sec1").style.display = "none"
        setTimeout(window.close, 1000 * 10)
    } else {
        document.getElementById("sec1").style.display = 'none'
        document.getElementById("sec2").style.display = "block"
    }
}

let veg = true
function selectVeg() {
    veg = true
}
function selectNonVeg() {
    veg = false
}
function next2() {
    document.getElementById("sec2").style.display = 'none'
    document.getElementById("sec3").style.display = "block"
    if (veg) document.getElementById("sec3_1").style.display = "block"
    else document.getElementById("sec3_2").style.display = "block"
}
function submit() {
        document.getElementById("sec4").style.display = "block"
        document.getElementById("sec3").style.display = "none"
        setTimeout(window.close, 1000 * 10)
}
