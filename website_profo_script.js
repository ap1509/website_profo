// Time-based greeting
const hour = new Date().getHours();
let greetingText = "";

if (hour < 12) {
    greetingText = "Good Morning 🌅";
} else if (hour < 18) {
    greetingText = "Good Afternoon ☀️";
} else {
    greetingText = "Good Evening 🌙";
}

document.addEventListener("DOMContentLoaded", () => {
    const greet = document.getElementById("greeting");
    if (greet) {
        greet.innerText = greetingText;
    }
});

// Services list
const services = [
    "Static Website Development",
    "HTML & CSS Design",
    "JavaScript Interactivity",
    "Beginner Python Projects",
    "Git & GitHub Setup"
];

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("service_list");
    if (list) {
        services.forEach(service => {
            const li = document.createElement("li");
            li.textContent = service;
            list.appendChild(li);
        });
    }
});

// Contact form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
