const topBar = document.querySelector('.top-bar');
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        if (scrollTop > 40) { // Adjust this value to match your top-bar height
            topBar.style.transform = 'translateY(-100%)';
            navbar.classList.add('scrolled');
        }
    } else {
        // Scrolling up
        if (scrollTop <= 40) { // Adjust this value to match your top-bar height
            topBar.style.transform = 'translateY(0)';
            navbar.classList.remove('scrolled');
        }
    }
    lastScrollTop = scrollTop;
});

// -------------------------------------------PORTFULIO--------------------------------------

// Slider funksionalligi
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const slideCount = slides.length;

// Slaydni yangilash
function updateSlide() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Indikatorlarni yangilash
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Keyingi slaydga o'tish
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlide();
}

// Oldingi slaydga qaytish
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlide();
}

// Tugmalar uchun hodisalar
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Indikatorlar uchun hodisalar
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlide();
    });
});

// Klaviatura bilan boshqarish
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});


// Akkordeon funksionalligi
document.querySelectorAll('.accordion-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Barcha ochiq elementlarni yopamiz
        document.querySelectorAll('.accordion-item').forEach(accordionItem => {
            accordionItem.classList.remove('active');
        });

        // Bosilgan elementni ochish/yopish
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

