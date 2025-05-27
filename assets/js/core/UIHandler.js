class UIHandler {
  constructor() {
    if (new.target === UIHandler) {
      throw new Error("UIHandler is an abstract class and cannot be instantiated directly.");
    }
  }

  initialize() {
    throw new Error("Method 'initialize()' must be implemented.");
  }

  handleScroll() {
    // Comportamiento base para manejar scroll
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
    } else {
      navbar.classList.remove('bg-dark');
    }
  }

  setupEventListeners() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
}