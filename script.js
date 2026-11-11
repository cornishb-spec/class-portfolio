const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

/* Scroll Animation */
ScrollReveal().reveal("main section", {
    distance: "30px",
    duration: 800,
    origin: "bottom",
    interval: 150
});
