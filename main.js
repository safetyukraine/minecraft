first = function() {
    window.location.href = "pages/first.html";
}

var x = document.getElementsByClassName("card");

for (i=0; i < x.length; i++) {
    x[i].addEventListener("click", first);
}