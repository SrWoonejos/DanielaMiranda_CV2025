document.addEventListener("DOMContentLoaded", function () {
  const botonDescarga = document.getElementById("descargarCV");

  if (botonDescarga) {
    botonDescarga.addEventListener("click", function (event) {
      event.preventDefault();

      const cvCompleto = document.getElementById("cv-pdf");

      if (!cvCompleto) {
        alert("No se encontró el contenido del CV.");
        return;
      }

      if (typeof html2pdf === "undefined") {
        alert("No se ha cargado la librería html2pdf.");
        return;
      }

      const opciones = {
        margin: 0.5,
        filename: 'CV_DanielaMiranda.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      setTimeout(() => {
        try {
          html2pdf().set(opciones).from(cvCompleto).save();
        } catch (error) {
          alert("Ocurrió un error al generar el PDF.");
          console.error(error);
        }
      }, 100);
    });
  }
});