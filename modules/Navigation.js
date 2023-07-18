/* eslint-disable import/prefer-default-export */
// Navigation class
export class Navigation {
  constructor() {
    this.navLinks = document.querySelectorAll('nav a');
    this.sections = document.querySelectorAll('section');
    this.addEventListeners();
  }

  // Add event listeners to navigation links
  addEventListeners() {
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const target = link.getAttribute('href');
        this.hideAllSections();
        document.querySelector(target).style.display = 'block';
      });
    });
  }

  // Hide all sections
  hideAllSections() {
    this.sections.forEach((section) => {
      section.style.display = 'none';
    });
  }
}
