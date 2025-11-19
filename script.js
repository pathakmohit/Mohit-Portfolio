document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('animate__animated', 'animate__pulse');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('animate__animated', 'animate__pulse');
  });
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out, I will get back to you soon!');
    form.reset();
  });
}
