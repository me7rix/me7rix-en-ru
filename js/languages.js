window.onload = language_en;

function language_en() {
    document.querySelector('.a_home').innerHTML = 'Home';
    document.querySelector('.a_about').innerHTML = 'About';
    document.querySelector('.a_skills').innerHTML = 'Skills';
    document.querySelector('.a_projects').innerHTML = 'Projects';
    document.querySelector('.a_contact').innerHTML = 'Contact';
    document.querySelector('.language').innerHTML = 'EN';
    document.querySelector('.ru').classList.add('close');
    document.querySelector('.en').classList.remove('close');

    document.querySelector('.hello').innerHTML = "Hello! It's me";
    document.querySelector('.irina').innerHTML = 'Irina Krylova';
    document.querySelector('.i_am').innerHTML = "And I'm a <span class='multiple-text-en'></span>";
    
    document.querySelector('.i_am span').classList.add('multiple-text-en');
    document.querySelector('.i_am span').classList.remove('multiple-text-ru');
    let typed = new Typed('.multiple-text-en', {
        strings: ['UX/UI Designer', 'Frontend Developer', 'Backend Developer', 'Analyst', 'Copywriter'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.querySelector('.home_p').innerHTML = 'Development of web applications of various types and varying complexity';
    document.querySelector('.cv').innerHTML = 'Download CV';

    document.querySelector('.h2-about-me').innerHTML = 'About <span>Me</span>';
    document.querySelector('.h3-about-me').innerHTML = 'Fullstack Developer!';
    document.querySelector('.p-about-me').innerHTML = 'I am a qualifed certified professional. I enjoy design and development. I have more than 2 years of web development experience. You can familiarize yourself with tools and technologies and proficiency in them in the <a href="#skills"><span>"My Skills"</span></a> section, and with completed projects in the <a href="#projects"><span>"Projects"</span></a> section.';
    document.querySelector('.a-about-me').innerHTML = 'Read More';
    
    document.querySelector('.h2-skills').innerHTML = 'My <span>Skills</span>';
    document.querySelector('.h3-skill-1').innerHTML = 'Design';
    document.querySelector('.p-skill-1').innerHTML = 'Creating a layout of the future web application';
    document.querySelector('.a-skill-1').innerHTML = 'Read More';
    document.querySelector('.h3-skill-2').innerHTML = 'Frontend';
    document.querySelector('.p-skill-2').innerHTML = 'Development of web application user interfaces';
    document.querySelector('.a-skill-2').innerHTML = 'Read More';
    document.querySelector('.h3-skill-3').innerHTML = 'Backend';
    document.querySelector('.p-skill-3').innerHTML = 'Connecting the web application to the database';
    document.querySelector('.a-skill-3').innerHTML = 'Read More';
    
}



function language_ru() {
    document.querySelector('.a_home').innerHTML = 'Главная';
    document.querySelector('.a_about').innerHTML = 'Обо мне';
    document.querySelector('.a_skills').innerHTML = 'Навыки';
    document.querySelector('.a_projects').innerHTML = 'Проекты';
    document.querySelector('.a_contact').innerHTML = 'Контакты';
    document.querySelector('.language').innerHTML = 'RU';
    document.querySelector('.en').classList.add('close');
    document.querySelector('.ru').classList.remove('close');

    document.querySelector('.hello').innerHTML = "Привет! Это я";
    document.querySelector('.irina').innerHTML = 'Ирина Крылова';
    document.querySelector('.i_am').innerHTML = "И я <span class='multiple-text-ru'></span>";

    
    document.querySelector('.i_am span').classList.add('multiple-text-ru');
    document.querySelector('.i_am span').classList.remove('multiple-text-en');
    let typed2 = new Typed('.multiple-text-ru', {
        strings: ['UX/UI Дизайнер', 'Фронтенд Разработчик', 'Бэкенд Разработчик', 'Аналитик', 'Копирайтер'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    document.querySelector('.home_p').innerHTML = 'Разработка веб-приложений различных типов и различной сложности';
    document.querySelector('.cv').innerHTML = 'Скачать резюме';

    document.querySelector('.h2-about-me').innerHTML = 'Обо <span>Мне</span>';
    document.querySelector('.h3-about-me').innerHTML = 'Фулстак разработчик!';
    document.querySelector('.p-about-me').innerHTML = 'I am a qualifed certified professional. I enjoy design and development. I have more than 2 years of web development experience. You can familiarize yourself with tools and technologies and proficiency in them in the <a href="#skills"><span>"My Skills"</span></a> section, and with completed projects in the <a href="#projects"><span>"Projects"</span></a> section.';
    document.querySelector('.a-about-me').innerHTML = 'Читать больше';
    
    document.querySelector('.h2-skills').innerHTML = 'My <span>Skills</span>';
    document.querySelector('.h3-skill-1').innerHTML = 'Дизайн';
    document.querySelector('.p-skill-1').innerHTML = 'Создание макета будущего веб-приложения';
    document.querySelector('.a-skill-1').innerHTML = 'Читать больше';
    document.querySelector('.h3-skill-2').innerHTML = 'Фронтенд';
    document.querySelector('.p-skill-2').innerHTML = 'Разработка пользовательских интерфейсов веб-приложений';
    document.querySelector('.a-skill-2').innerHTML = 'Читать больше';
    document.querySelector('.h3-skill-3').innerHTML = 'Бэкенд';
    document.querySelector('.p-skill-3').innerHTML = 'Подключение веб-приложения к базе данных';
    document.querySelector('.a-skill-3').innerHTML = 'Читать больше';

}