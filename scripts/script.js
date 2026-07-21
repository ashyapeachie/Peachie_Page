const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        // remove class from all the buttons and panels

        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        // add active class when button is clicken and corresponding panel
    });
});
// tab functions 

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentTabIndex = 0;
const tabs = Array.from(tabButtons);
// nav buttons

tabs.forEach((tab, index) => {
    if (tab.classList.contains('active')) {
        currentTabIndex = index;
    }
});

prevButton.addEventListener('click', () => {
    if (currentTabIndex > 0) {
        currentTabIndex--;
        tabs[currentTabIndex].click();
    }
});

nextButton.addEventListener('click', () => {
    if (currentTabIndex < tabs.length - 1) {
        currentTabIndex++;
        tabs[currentTabIndex].click();
    }
});
// 

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
// submitting form