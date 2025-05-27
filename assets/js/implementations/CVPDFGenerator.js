class CVPDFGenerator extends PDFGenerator {
  constructor() {
    super('cv-content', {
      filename: 'DanielaMiranda-CV.pdf',
      pagebreak: { avoid: ['section', 'h2', 'h3', 'p', 'li'] }
    });
  }

  async beforeGenerate() {
    // Aplicar estilos compactos antes de generar
    document.getElementById('pdf-styles').media = 'all';
    return super.beforeGenerate();
  }

  async afterGenerate() {
    // Restaurar estilos después de generar
    document.getElementById('pdf-styles').media = 'print';
    return super.afterGenerate();
  }

  async generate() {
    return html2pdf().set(this.options).from(this.element).save();
  }
}