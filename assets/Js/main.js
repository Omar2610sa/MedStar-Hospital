const navBar = document.getElementById("bar")
const Bars = document.querySelector(".fa-bars")
const xMark = document.querySelector(".fa-xmark")
const humberger = document.querySelector(".humberger")

humberger.addEventListener("click", () => {
    Bars.classList.toggle("active");
    xMark.classList.toggle("active");
    navBar.classList.toggle("active");
})

// close Ul list 
document.querySelectorAll("#bar li a").forEach((link) => {
    link.addEventListener("click", () => {
        navBar.classList.remove("active");
        xMark.classList.remove("active");
        Bars.classList.add("active");
    })
})

// Dark toggle click


function darkToggle() {
    const body = document.body;
    const darkBtn = document.querySelector('.dark-btn i');

    // Toggle dark class
    body.classList.toggle('dark');

    // Change icon and logo
    if (body.classList.contains('dark')) {
        darkBtn.classList.remove('fa-moon');
        darkBtn.classList.add('fa-sun');
        // Change logo to dark version
        // Save preference
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkBtn.classList.remove('fa-sun');
        darkBtn.classList.add('fa-moon');
        // Change logo back to light version
        // Save preference
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    const body = document.body;
    const darkBtn = document.querySelector('.dark-btn i');

    if (darkMode === 'enabled') {
        body.classList.add('dark');
        darkBtn.classList.remove('fa-moon');
        darkBtn.classList.add('fa-sun');
        // Set dark logo on page load
    }
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.top-btn');
const darkBtn = document.querySelector('.dark-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show")
    } else {
        scrollTopBtn.classList.remove("show")
    }});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
