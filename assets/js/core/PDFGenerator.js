document.getElementById('btnDescargarPDF').addEventListener('click', async function() {
  // Crear un div temporal para contener el contenido del PDF
  const pdfContainer = document.createElement('div');
  pdfContainer.style.padding = '20px';
  
  // Clonar el header y el main
  const header = document.getElementById('cv-header').cloneNode(true);
  const main = document.getElementById('cv-main').cloneNode(true);
  
  // Aplicar estilos compactos al header
  header.querySelector('img').style.maxWidth = '80px';
  header.querySelector('h1').style.fontSize = '18pt';
  header.querySelector('h2').style.fontSize = '12pt';
  header.style.padding = '10px 0';
  header.style.marginBottom = '10px';
  
  // Añadir elementos al contenedor
  pdfContainer.appendChild(header);
  pdfContainer.appendChild(main);
  
  // Opciones para el PDF
  const options = {
    margin: [10, 10, 10, 10], // márgenes: [top, left, bottom, right] en mm
    filename: 'CV_Daniela_Miranda.pdf',
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: { 
      scale: 0.7, // Ajustar este valor para comprimir más (0.6-0.8)
      logging: false,
      useCORS: true,
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4',
      orientation: 'portrait',
      compress: true
    },
    pagebreak: { 
      mode: 'avoid-all',
      before: '#page2el' 
    }
  };

  try {
    // Generar el PDF
    await html2pdf().set(options).from(pdfContainer).save();
    console.log('PDF generado con éxito');
  } catch (error) {
    console.error('Error al generar PDF:', error);
    alert('Ocurrió un error al generar el PDF. Por favor inténtalo nuevamente.');
  }
});