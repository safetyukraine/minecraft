home = function() {
    history.back();
}

document.getElementById("home").addEventListener("click", home)

clear = function() {
    document.getElementById("chkpg").checked = false;
    document.getElementById("hamburger").checked = false;
}


document.querySelector("main").addEventListener("click", clear)

/*
pages = function() {
    document.getElementById("pages").style.cssText = "display: flex; flex-direction:column";
}

document.getElementById("days").addEventListener("click", pages)
*/