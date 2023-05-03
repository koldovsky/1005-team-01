(function () {
    const slides = [
        '<div><img src="img/spots/spots01.jpeg" alt="Carousel Spots IMG 01"></div>',
        '<div><img src="img/spots/spots02.jpeg" alt="Carousel Spots IMG 02"></div>',
        '<div><img src="img/spots/spots03.jpeg" alt="Carousel Spots IMG 03"></div>',
        '<div><img src="img/spots/spots04.png" alt="Carousel Spots IMG 04></div>',
        '<div><img src="img/spots/spots05.jpeg" alt="Carousel Spots IMG 05"></div>',
        '<div><img src="img/spots/spots06.jpeg" alt="Carousel Spots IMG 06"></div>',    
    ];
    let currentSlideIndx = 0;
    function renderSlide() {
      const slideContainer = document.querySelector(".spots__carousel-container");
      slideContainer.innerHTML = slides[currentSlideIndx];
      if (window.innerWidth > 600) {
        const secondSlideInd =
          currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
        slideContainer.innerHTML += slides[secondSlideInd];
  
        if (window.innerWidth > 768) {
          const thirdSlideInd =
            secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
          slideContainer.innerHTML += slides[thirdSlideInd];
  
          if (window.innerWidth > 992) {
            const fourthSlideInd =
              thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
            slideContainer.innerHTML += slides[fourthSlideInd];
          }
        }
      }
    }
    function nextSlide() {
      currentSlideIndx =
        currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      renderSlide();
    }
    function prevSlide() {
      currentSlideIndx =
        currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
      renderSlide();
    }
    renderSlide();
    const nextBtn = document.querySelector(".spots__carousel-prev");
    nextBtn.addEventListener("click", nextSlide);
  
    const prevBtn = document.querySelector(".spots__carousel-next");
    prevBtn.addEventListener("click", prevSlide);
  
    window.addEventListener("resize", renderSlide);
  })();