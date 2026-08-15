function showMessage() {
    alert("Thank you for visiting My Business Website!");
}

function changeTitle() {
    document.getElementById("main-title").innerHTML =
    "Welcome to My Business!";

    document.querySelector(".hero p").innerHTML =
    "Let's build something amazing together!";
}

// MENU
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navigation-menu");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.innerHTML = "×";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// CONTACT FORM
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you! Your message has been received.");

    this.reset();
});           
function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
function sayHello() {
    alert("Hello! Welcome to Samuel's website! 👋");
}
function changeColor() {
    document.body.style.backgroundColor = "lightgreen";
}
function surpriseMe() {
    document.getElementById("message").textContent =
        "You are becoming a web developer! 🚀";

    document.body.style.backgroundColor = "lightblue";
}
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});
