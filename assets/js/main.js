document.addEventListener("DOMContentLoaded", function () {
  // Cambiado a 'descargarCV' que es el ID correcto en tu HTML
  const botonDescarga = document.getElementById("descargarCV");

  if (botonDescarga) {
    botonDescarga.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace

      // Crear contenedor para el PDF con estilos específicos
      const contenidoPDF = document.createElement("div");
      contenidoPDF.style.width = '210mm';
      contenidoPDF.style.padding = '20px';
      contenidoPDF.style.boxSizing = 'border-box';
      contenidoPDF.style.backgroundColor = '#ffffff';

      // Clonar y ajustar el header
      const header = document.getElementById("cv-header").cloneNode(true);
      header.querySelector('img').style.maxWidth = '80px';
      header.style.padding = '10px 0';
      header.style.marginBottom = '15px';

      // Clonar y ajustar el main content
      const main = document.getElementById("cv-main").cloneNode(true);
      main.style.fontSize = '11pt';
      main.style.lineHeight = '1.4';
      
      // Ajustar secciones
      const secciones = main.querySelectorAll('section');
      secciones.forEach(section => {
        section.style.marginBottom = '15px';
        section.style.pageBreakInside = 'avoid';
      });

      // Ajustar títulos
      const titulos = main.querySelectorAll('h2, h3');
      titulos.forEach(titulo => {
        titulo.style.marginTop = '10px';
        titulo.style.marginBottom = '8px';
        titulo.style.pageBreakAfter = 'avoid';
      });

      // Añadir elementos al contenedor
      contenidoPDF.appendChild(header);
      contenidoPDF.appendChild(main);

      // Opciones para el PDF (mejoradas)
      const opciones = {
        margin: [10, 10, 10, 10], // [top, left, bottom, right] en mm
        filename: 'CV_DanielaMiranda.pdf',
        image: { 
          type: 'jpeg', 
          quality: 0.98 
        },
        html2canvas: { 
          scale: 2,
          logging: false,
          useCORS: true,
          letterRendering: true,
          allowTaint: true
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          avoid: ['section', 'h2', 'h3', 'li', 'p']
        }
      };

      // Generar PDF con manejo de errores
      try {
        html2pdf().set(opciones).from(contenidoPDF).save();
        console.log('PDF generado exitosamente');
      } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Ocurrió un error al generar el PDF. Por favor inténtalo nuevamente.');
      }
    });
  } else {
    console.warn('No se encontró el botón de descarga con ID "descargarCV"');
  }

  // Opcional: Añadir smooth scrolling para los enlaces del navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
