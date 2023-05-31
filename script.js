const form = document.querySelector('.contactForm');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert('Thank you for submitting the form!');
    location.reload();
})




// const form = 'Thank you for submitting the form!'

// document.querySelector('.contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert(form);
//     location.reload();
// });



// const message = "Thank you for submitting your request. The crew will respond shortly."

// document.getElementById("contactForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert(message);
// });