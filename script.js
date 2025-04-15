document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    //  aa maru display success message chee
    const formMessage = document.getElementById('form-message');
    formMessage.innerHTML = '<div class="alert alert-success">Thank you! Your message has been sent.</div>';

    //  form reset karva mate
    document.getElementById('contactForm').reset();

      
});
