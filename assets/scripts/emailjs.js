// The bulk of this code is taken from the emailjs documentation. A link is provided in the README.
window.onload = function() {
    document.getElementById('contact-me-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_4qof74a', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
        // Reset the form 
        document.getElementById('contact-me-form').reset();
        // Alert notification
        alert("Thank you for your message!");
    });
};