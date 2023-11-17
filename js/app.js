// preloader delay
window.onload = function() {
    let preloader = document.getElementById('preloader');
    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 800);
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// typed js
document.querySelector('.home-span').classList.add('multiple-text');
const typed = new Typed('.multiple-text', {
    strings: ['UX/UI Designer', 'Frontend Developer', 'Backend Developer', 'Analyst', 'Copywriter'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// scroll reveal
ScrollReveal ( {
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.header, .home-content, .heading, .ellipse-2', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .about-content, .skills-container, .projects-box, .projects-more, .contact form, .ellipse-3, .ellipse-5, .projects-link-more', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img, .ellipse-1, .ellipse-4, .ellipse-6', {
    origin: 'left'
});




let window_alert = document.querySelector('.alert');
window_alert.classList.add('close');

function check_form() {
    let user_name = document.getElementById('name_user').value;
    let user_email = document.getElementById('email_user').value;
    let user_message = document.getElementById('message_user').value;

    if (user_name === "" && user_email === "" && user_message === "") {
        window_alert.classList.add('close');
        return false;
    } else if (user_name === "" || user_email === "" || user_message === "") {
        window_alert.classList.remove('close');
        document.querySelector('.alert__title').innerHTML = 'Warning!';
        document.querySelector('.alert__text').innerHTML = 'Blank or incorrectly filled in fields: <br> "Name", "Mail" or "Your message"';
        return false;
    } else if (user_name != "" && user_email != "" && user_message != "") {
        window_alert.classList.add('close');
        document.querySelector('.alert__title').innerHTML = 'Successfully!';
        document.querySelector('.alert__text').innerHTML = 'The application has been sent successfully! Thank you for contacting us!';
    }

}


function close_window_alert() {
    window_alert.classList.add('close');
}