var header = document.getElementById("header")
var ms = document.getElementById("models")
var m3 = document.getElementById("model3")
var mx = document.getElementById("modelx")
var my = document.getElementById("modely")
var model = document.getElementById("model")
var sixtymph = document.getElementById("sixtymph")
var topspeed = document.getElementById("topspeed")
var maxrange = document.getElementById("maxrange")

ms.onclick = function() {
    header.style.backgroundImage = "url(Assets/images/image-1.png)"
    model.innerHTML = "Model S"
    sixtymph.innerHTML = "1.9 s"
    topspeed.innerHTML = "200 mph"
    maxrange.innerHTML = "396 mi"

}

m3.onclick = function() {
    header.style.backgroundImage = "url(Assets/images/image-2.png)"
    model.innerHTML = "Model 3"
    sixtymph.innerHTML = "1.7 s"
    topspeed.innerHTML = "220 mph"
    maxrange.innerHTML = "415 mi"

}

mx.onclick = function() {
    header.style.backgroundImage = "url(Assets/images/image-3.png)"
    model.innerHTML = "Model X"
    sixtymph.innerHTML = "1.5 s"
    topspeed.innerHTML = "240 mph"
    maxrange.innerHTML = "458 mi"

}

my.onclick = function() {
    header.style.backgroundImage = "url(Assets/images/image-4.png)"
    model.innerHTML = "Model Y"
    sixtymph.innerHTML = "1.3 s"
    topspeed.innerHTML = "250 mph"
    maxrange.innerHTML = "510 mi"

}