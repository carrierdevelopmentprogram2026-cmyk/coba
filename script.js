document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }

  // Active Link Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');

  const highlightNavigation = () => {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavigation);
});
