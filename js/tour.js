// // Отримуємо всі елементи з класом "tour__pulse-dot"
// const dots = document.querySelectorAll('.tour__pulse-dot');

// // Додаємо обробник події "mouseover" для кожного елемента
// dots.forEach(dot => {
//   dot.addEventListener('mouseover', () => {
//     // Отримуємо додаткові зображення, які потрібно відобразити
//     const images = dot.querySelectorAll('.tour__hover');

//     // Змінюємо стиль відображення кожного зображення на "block"
//     images.forEach(image => {
//       image.style.display = 'block';
//     });
//   });

//   // Додаємо обробник події "mouseout" для кожного елемента
//   dot.addEventListener('mouseout', () => {
//     // Отримуємо додаткові зображення, які потрібно приховати
//     const images = dot.querySelectorAll('.tour__hover');

//     // Змінюємо стиль відображення кожного зображення на "none"
//     images.forEach(image => {
//       image.style.display = 'none';
//     });
//   });
// });


// Отримуємо всі елементи з класом "tour__pulse-dot"
const dots = document.querySelectorAll('.tour__pulse-dot');

// Додаємо обробник події "mouseenter" для кожного елемента
dots.forEach(dot => {
  dot.addEventListener('mouseenter', () => {
    // Отримуємо додаткові зображення, які потрібно відобразити
    const images = dot.querySelectorAll('.tour__hover');

    // Змінюємо стиль відображення кожного зображення на "block"
    images.forEach(image => {
      image.style.display = 'block';
    });
  });

  // Додаємо обробник події "mouseleave" для кожного елемента
  dot.addEventListener('mouseleave', () => {
    // Отримуємо додаткові зображення, які потрібно приховати
    const images = dot.querySelectorAll('.tour__hover');

    // Змінюємо стиль відображення кожного зображення на "none"
    images.forEach(image => {
      image.style.display = 'none';
    });
  });
});


