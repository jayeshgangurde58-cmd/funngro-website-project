const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('mobile-open');
    menu.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menu.textContent = isOpen ? '×' : '☰';
  });
}

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-list details').forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
