document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the contact form
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        // Simple validation - Check if fields are not empty
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields');
            return false;
        }

        // You can add more advanced validation if needed

        return true; // Form submission will proceed if all validations pass
    }

    // Attach the validation function to the form submission event
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();  // Prevent the form from being submitted
        }
        // You can add other actions here if needed
    });
});