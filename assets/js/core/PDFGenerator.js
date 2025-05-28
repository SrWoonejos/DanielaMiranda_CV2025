document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('descargarCV').addEventListener('click', function() {
    // Elemento que contiene todo el contenido del CV
    const element = document.createElement('div');
    element.style.width = '210mm';
    element.style.padding = '20px';
    
    // Clonamos los elementos principales para no afectar la visualización actual
    const header = document.getElementById('cv-header').cloneNode(true);
    const main = document.getElementById('cv-main').cloneNode(true);
    
    // Ajustamos estilos para el PDF
    header.querySelector('img').style.maxWidth = '80px';
    header.style.padding = '10px';
    header.style.marginBottom = '10px';
    
    main.style.fontSize = '10pt';
    main.querySelectorAll('section').forEach(section => {
      section.style.marginBottom = '10px';
    });
    
    // Añadimos los elementos al contenedor
    element.appendChild(header);
    element.appendChild(main);
    
    // Opciones para el PDF
    const options = {
      margin: 10,
      filename: 'CV_DanielaMiranda.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        logging: false,
        useCORS: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4',
        orientation: 'portrait'
      }
    };

    // Generar el PDF
    html2pdf().set(options).from(element).save();
  });
});