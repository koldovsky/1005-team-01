setTimeout(() => {
    const navItem = document.querySelectorAll('.places-nav-item');
    const navLink = document.querySelectorAll('.places-nav-link');
    const placesItem = document.querySelectorAll('.places-item');

    navLink.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            console.log("after colling");
            event.preventDefault();

            navItem.forEach((item) => {
                item.classList.remove('active');
            });

            navItem[index].classList.add('active');

            placesItem.forEach((tab) => {
                tab.classList.remove('active');
            });

            const targetId = link.getAttribute('href').substring(1);
            const targetTab = document.getElementById(targetId);
            targetTab.classList.add('active');
        });
    });
}, 3000);

