document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form from submitting
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        let valid = true;

        // Validate Name (should not be empty)
        if (name === "") {
            alert("Please enter your name.");
            valid = false;
        }

        // Validate Email (simple regex pattern for email format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Validate Message (should not be empty)
        if (message === "") {
            alert("Message cannot be empty.");
            valid = false;
        }

        // If all fields are valid, allow submission
        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});