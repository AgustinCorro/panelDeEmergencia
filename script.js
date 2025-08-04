//cargo la alerta en la constante sonido(lo podes cambiar por otro mas amigable)
const sonido = new Audio('/alerta.mp3');

document.getElementById('servicioForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const servicio = this.servicio.value;
  let direccion = this.direccion.value.toUpperCase();
  const moviles = this.movil.value;

  // Ocultar formulario
  this.style.display = 'none';

  // Crear el contenido igual que en listado.php
  const resultadoDiv = document.getElementById('resultado');

  resultadoDiv.innerHTML = `
    <div class="serv">
      <h1>${servicio}</h1>
    </div>
    <div>
      <h2>${direccion}</h2>
    </div>
    <div>
      <h2>${moviles}</h2>
    </div>
  `;

  resultadoDiv.style.display = 'flex'; // para que respete flex-direction y centrado
  resultadoDiv.style.flexDirection = 'column';
  resultadoDiv.style.justifyContent = 'center';
  resultadoDiv.style.alignItems = 'center';
  resultadoDiv.style.height = '100vh';
  //reproduzco la alerta
  sonido.play();
});
