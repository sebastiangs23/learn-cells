// Definimos un componente como una clase
class MiComponente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método para crear la barra de navegación
  crearNavbar() {
    const navbar = document.createElement('nav');
    navbar.style.backgroundColor = '#333';
    navbar.style.color = 'white';
    navbar.style.padding = '10px';
    navbar.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>Mi Aplicación</span>
        <div>
          <a href="#" style="color: white; margin-right: 15px; text-decoration: none;">Inicio</a>
          <a href="#" style="color: white; text-decoration: none;">Acerca de</a>
        </div>
      </div>
    `;
    return navbar;
  }

  // Método para crear el botón
  crearBoton() {
    const boton = document.createElement('button');
    boton.textContent = '¡Haz clic aquí!';
    boton.style.padding = '10px 20px';
    boton.style.backgroundColor = '#007BFF';
    boton.style.color = 'white';
    boton.style.border = 'none';
    boton.style.borderRadius = '5px';
    boton.style.cursor = 'pointer';

    // Añadir un evento al botón
    boton.addEventListener('click', () => {
      alert(`¡Hola, ${this.nombre}! Has hecho clic en el botón.`);
    });
    return boton;
  }

  // Método para renderizar el componente completo
  render() {
    const contenedor = document.createElement('div');

    // Añadir el navbar
    const navbar = this.crearNavbar();
    contenedor.appendChild(navbar);

    // Añadir el mensaje principal
    const mensaje = document.createElement('div');
    mensaje.innerHTML = `¡Hola, ${this.nombre}! Este es mi primer componente.`;
    mensaje.style.padding = '20px';
    contenedor.appendChild(mensaje);

    // Añadir el botón
    const boton = this.crearBoton();
    contenedor.appendChild(boton);

    return contenedor;
  }
}

// Instanciamos el componente y lo añadimos al DOM
const app = document.getElementById('app');
const miComponente = new MiComponente('Usuario');
app.appendChild(miComponente.render());