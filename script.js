// Select all navigation links
const navLinks = document.querySelectorAll('.topnav a');

// Add event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Get the href attribute of the clicked link
    const href = event.target.getAttribute('href');

    // Scroll to the corresponding section
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add hover effects to images
document.querySelectorAll('.column.side img').forEach(image => {
  image.addEventListener('mouseover', event => {
    event.target.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', event => {
    event.target.style.transform = 'scale(1)';
  });
});

