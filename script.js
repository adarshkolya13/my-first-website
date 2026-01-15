function sayHello() {
    let message = "Hello Adarsh! Welcome to your website ";
    alert(message);
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        output.style.color = "red";
        output.textContent = "Please fill all fields ❌";
    } else {
        output.style.color = "green";
        output.textContent = "Message sent successfully ✅";
        document.getElementById("contactForm").reset();
    }
});
