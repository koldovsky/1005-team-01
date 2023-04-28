const container = document.querySelector('.tour__container-map');
const dotsContainer = document.querySelector('.dots');

const image = container.querySelector('.tour-map');

const coordinates = [
  { x: 231.5, y: 277 },
  { x: 162, y: 563 },
  { x: 132, y: 427 },
  { x: 257, y: 171 },
  { x: 338, y: 95 }
];

coordinates.forEach(coord => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.style.top = `${coord.y}px`;
  dot.style.left = `${coord.x}px`;
  dotsContainer.appendChild(dot);
});
