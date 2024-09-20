const phrases = ["Forging connections in the world of metals", 
    "Shaping the future, one metal at a time",
     "Navigating the metal marketplace with precision",
    "Refining the art of metal trading"];
let currentIndex = 0;
const textWrapper = document.getElementById('textWrapper');

function animateText() {
    textWrapper.style.transform = 'rotateX(-90deg)';
    setTimeout(() => {
        textWrapper.textContent = phrases[currentIndex];
        textWrapper.style.transform = 'rotateX(0deg)';
        currentIndex = (currentIndex + 1) % phrases.length;
    }, 250);

    setTimeout(animateText, 5000); // 5 seconds delay
}

animateText();


// hamburger

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});

// Rotate hamburger when opened
let isOpen = false;
hamburger.addEventListener('click', () => {
    if (!isOpen) {
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        hamburger.style.transform = 'rotate(0deg)';
    }
    isOpen = !isOpen;
});





// number-increasing---

document.addEventListener('DOMContentLoaded', () => {
  const stats = document.querySelectorAll('.stat-number');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetNumber = parseInt(target.getAttribute('data-target'));
            animateValue(target, 0, targetNumber, 2000);
            observer.unobserve(target);
        }
    });
  }, options);
  
  stats.forEach(stat => observer.observe(stat));
  });
  
  function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
        window.requestAnimationFrame(step);
    } else {
        obj.innerHTML = end + '+';
    }
  };
  window.requestAnimationFrame(step);
  }


