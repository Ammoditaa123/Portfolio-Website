document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
});
// Scroll-linked vertical movement
window.addEventListener('scroll', () => {
    const scrollText = document.querySelector('.scroll-text');
    const scrollY = window.scrollY;
    scrollText.style.transform = `translateY(${scrollY * 0.4}px)`; // Adjust speed here
});
