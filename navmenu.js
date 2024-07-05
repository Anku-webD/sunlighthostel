function navShow() {
    let nav = document.querySelector(".nav");
    if (nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}
