function animateNumbers(selector, endValue, suffix, deley) {
    const targetNumber = document.querySelector(selector);

    const options = {
        rootMargin: '0px',
        threshold: 0.7
    };

    function onIntersection(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);

                let countNumber = 0;

                const counter = setInterval(function() {
                    if (countNumber >= endValue) {
                        clearInterval(counter);
                    } else {
                        countNumber++;
                        const displayValue = countNumber.toLocaleString() + suffix;
                        targetNumber.textContent = displayValue;
                    }
                }, deley);
            }
        });
    }

    const observer = new IntersectionObserver(onIntersection, options);
    observer.observe(targetNumber);
}

animateNumbers('#fjord-number', 17, ',000+', 200);
animateNumbers('#strip-number', 36, '', 100);
animateNumbers('#lake-number', 450, ',000+', 10);
animateNumbers('#waterfall-number', 10, ',000', 250);