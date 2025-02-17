function next1(event) {
    if (!document.getElementById("health").value || !(document.getElementById("Vegetarian").checked || document.getElementById("Non-Vegetarian").checked)) return
    event.preventDefault()
    if (document.getElementById("Vegetarian").checked) {
        document.getElementById("sec5").style.display = "block"
        document.getElementById("sec1").style.display = "none"
        setTimeout(window.close, 1000 * 10)
        fetch("https://train.vinaiak.com/survey", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                veg: true
            })
        })
    } else {
        document.getElementById("sec1").style.display = 'none'
        document.getElementById("sec2").style.display = "block"
    }
}

let type = ''
function selectType(arg_type) {
    type = arg_type
}
let sec2clicked = ''
function sec2click(category) {
    sec2clicked = category;
}
function next2() {
    if (!sec2clicked) {
        window.alert("Please select a field")
        return
    }
    document.getElementById("sec2").style.display = 'none'
    document.getElementById("sec3").style.display = "block"
}
let sec3clicked = false
function sec3click() {
    sec3clicked = true;
}
function next3() {
    if (!sec3clicked) {
        window.alert("Please select a field")
        return
    }
    document.getElementById("sec3").style.display = 'none'
    document.getElementById("sec4").style.display = "block"
    if (type) document.getElementById("sec4_2").style.display = "block"
    else document.getElementById("sec4_1").style.display = "block"
}
function submitos(event) {
    if ((document.getElementById("textarea1").value || document.getElementById("textarea2").value) &&
        (document.getElementById("whychoice1").value || document.getElementById("whychoice2").value)) {
        event.preventDefault()
        document.getElementById("sec5").style.display = "block"
        document.getElementById("sec4").style.display = "none"
        sendServer()
        setTimeout(window.close, 1000 * 10)
    }
    else return
}
function sendServer() {
    fetch("https://train.vinaiak.com/survey", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            veg: false,
            data: {
                argreeability: document.getElementById('health').value,
                category: sec2clicked,
                type,
                review: document.getElementById("textarea1").value || document.getElementById("textarea2").value,
                whychoice: document.getElementById("whychoice1").value || document.getElementById("whychoice2").value,
            },
            chicken_choosen: type ? true : false

        })
    })
}