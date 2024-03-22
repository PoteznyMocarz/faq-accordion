document.getElementById("answ1").addEventListener("click", function() {
    document.getElementById("text1").classList.toggle("active")
    if(document.getElementById("text1").classList.contains("active")) {
        document.getElementById("img1").setAttribute("src", "/assets/images/icon-minus.svg")
    }
    else {
        document.getElementById("img1").setAttribute("src", "/assets/images/icon-plus.svg")
    }
})

document.getElementById("answ2").addEventListener("click", function() {
    document.getElementById("text2").classList.toggle("active")
    if(document.getElementById("text2").classList.contains("active")) {
        document.getElementById("img2").setAttribute("src", "/assets/images/icon-minus.svg")
    }
    else {
        document.getElementById("img2").setAttribute("src", "/assets/images/icon-plus.svg")
    }
})

document.getElementById("answ3").addEventListener("click", function() {
    document.getElementById("text3").classList.toggle("active")
    if(document.getElementById("text3").classList.contains("active")) {
        document.getElementById("img3").setAttribute("src", "/assets/images/icon-minus.svg")
    }
    else {
        document.getElementById("img3").setAttribute("src", "/assets/images/icon-plus.svg")
    }
})

document.getElementById("answ4").addEventListener("click", function() {
    document.getElementById("text4").classList.toggle("active")
    if(document.getElementById("text4").classList.contains("active")) {
        document.getElementById("img4").setAttribute("src", "/assets/images/icon-minus.svg")
    }
    else {
        document.getElementById("img4").setAttribute("src", "/assets/images/icon-plus.svg")
    }
})