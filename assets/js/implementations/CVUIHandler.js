class CVUIHandler extends UIHandler {
  constructor() {
    super();
    this.pdfGenerator = new CVPDFGenerator();
  }

  initialize() {
    this.setupEventListeners();
    this.setupPDFButton();
  }

  setupPDFButton() {
    const btn = document.getElementById('btnDescargarPDF');
    btn.addEventListener('click', () => this.pdfGenerator.generatePDF());
  }

  handleScroll() {
    super.handleScroll();
    const sections = document.querySelectorAll('.cv-section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
}