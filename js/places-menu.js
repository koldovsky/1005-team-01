// Отримуємо всі посилання меню та відповідні вікна контенту
const navLinks = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-pane');

// Додаємо обробник подій для кожного посилання меню
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Знаходимо id вікна контенту, на яке вказує посилання
    const target = link.getAttribute('href');

    // Закриваємо всі вікна контенту
    tabContents.forEach((tabContent) => {
  tabContent.classList.remove('show', 'active');
});

// Відкриваємо вікно контенту, на яке вказує посилання
const targetTab = document.querySelector(target);
targetTab.classList.add('show', 'active');
});
});

// Зробимо перше вікно контенту активним за замовчуванням
tabContents[0].classList.add('show', 'active');