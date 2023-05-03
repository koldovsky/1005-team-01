const acordion = document.querySelectorAll(".acordion__part");

for (let i=0; i<acordion.length; i++) {
    acordion[i].addEventListener('click', function() {
      for (let j = 0; j < acordion.length; j++) {
        acordion[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}
