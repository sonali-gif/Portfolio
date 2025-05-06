// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Scroll to Top Button
  const scrollBtn = document.createElement('button');
  scrollBtn.innerText = '↑';
  scrollBtn.id = 'scrollToTopBtn';
  scrollBtn.style.position = 'fixed';
  scrollBtn.style.bottom = '20px';
  scrollBtn.style.right = '20px';
  scrollBtn.style.padding = '10px 15px';
  scrollBtn.style.fontSize = '18px';
  scrollBtn.style.borderRadius = '50%';
  scrollBtn.style.backgroundColor = '#0ea5e9';
  scrollBtn.style.color = '#fff';
  scrollBtn.style.border = 'none';
  scrollBtn.style.cursor = 'pointer';
  scrollBtn.style.display = 'none';
  scrollBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  document.body.appendChild(scrollBtn);
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  // Form submission alert
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting me! I will get back to you soon.');
      form.reset();
    });
  }
  
  // Dynamic Year in Footer
  const footer = document.querySelector('footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} DevSonali. All Rights Reserved.`;
  }
  