// Typing animation
const text = "Web Developer | Java Learner";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();


// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});


// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        output.style.color = "red";
        output.textContent = "Please fill all fields ❌";
    } else {
        output.style.color = "green";
        output.textContent = "Message sent successfully ✔";
        this.reset();
    }
});
