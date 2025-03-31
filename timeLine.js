window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 20) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});