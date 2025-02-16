function next1(event) {
    if (!document.getElementById("health").value || !(document.getElementById("Vegetarian").checked || document.getElementById("Non-Vegetarian").checked)) return
    event.preventDefault()
    if (document.getElementById("Vegetarian").checked) {
        document.getElementById("sec5").style.display = "block"
        document.getElementById("sec1").style.display = "none"
        setTimeout(window.close, 1000 * 10)
    } else {
        document.getElementById("sec1").style.display = 'none'
        document.getElementById("sec2").style.display = "block"
    }
}

let veg = false
function selectVeg() {
    veg = true
}
function selectNonVeg() {
    veg = false
}
let sec2clicked=false
function sec2click(){
    sec2clicked=true;
}
function next2() {
    if(!sec2clicked) {
        window.alert("Please select a field")
        return
    }
    document.getElementById("sec2").style.display = 'none'
    document.getElementById("sec3").style.display = "block"
}
let sec3clicked=false
function sec3click(){
    sec3clicked=true;
}
function next3() {
    if(!sec3clicked) {
        window.alert("Please select a field")
        return
    }
    document.getElementById("sec3").style.display = 'none'
    document.getElementById("sec4").style.display = "block"
    if (veg) document.getElementById("sec4_1").style.display = "block"
    else document.getElementById("sec4_2").style.display = "block"
}
function submitos(event) {
    if ((document.getElementById("textarea1").value || document.getElementById("textarea2").value) &&
        (document.getElementById("whychoice1").value || document.getElementById("whychoice2").value)) {
        event.preventDefault()
        document.getElementById("sec5").style.display = "block"
        document.getElementById("sec4").style.display = "none"
        setTimeout(window.close, 1000 * 10)
    }
    else return
}
