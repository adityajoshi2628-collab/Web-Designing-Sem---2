// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");

    header.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// Email Validation
const emailForm = document.querySelector(".email-signup");

if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = this.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            alert("Welcome to Netflix! Signup successful.");
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
}

// Smooth Scroll for Buttons (Optional)
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.opacity = "0.9";
    });

    button.addEventListener("mouseout", () => {
        button.style.opacity = "1";
    });
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Netflix Clone Loaded Successfully!");
});
