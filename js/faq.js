const acordion = document.querySelectorAll(".acordion__part");

for (let i=0; i<acordion.length; i++) {
    acordion[i].addEventListener('click', function() {
      this.classList.toggle('active')
    })
  }