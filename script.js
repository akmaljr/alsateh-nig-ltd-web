// Welcome message
window.onload = function () {
    console.log("Alsateh Website Loaded");
};

// Highlight active page
let links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "yellow";
    }
});

if (document.title.includes("About")) {
    let aboutSection = document.querySelector(".about-text");
    aboutSection.style.opacity = 0;
    aboutSection.style.transition = "1s";

    window.addEventListener("load", () => {
        aboutSection.style.opacity = 1;
    });
}

if (document.title.includes("Services")) {
    let cards = document.querySelectorAll(".service-card");
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.6s";
    });

    window.addEventListener("scroll", () => {
        cards.forEach(card => {
            let position = card.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    });
}

function contactService(serviceName) {
    let phoneNumber = "2347040529330.07039798016.07061130621,08035184282,08133489449,07038689811"; // replace with your WhatsApp number
    let message = "Hello, I want to inquire about " + serviceName;
    let url = "https://wa.me/" +2347039798016  + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

// Optional: Animate cards on scroll
if (document.title.includes("Products") || document.title.includes("Services")) {
    let cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "0.6s";
    });

    window.addEventListener("scroll", () => {
        cards.forEach(card => {
            let position = card.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    });
}

// Contacts form submit
if (document.getElementById("contactForm")) {
    const contactForm = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        formResponse.style.color = "green";
        formResponse.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    });
}