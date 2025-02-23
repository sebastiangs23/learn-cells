// Definimos un componente como una clase
class MiComponente {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    // Método para renderizar el componente
    render() {
      const elemento = document.createElement('div');
      elemento.innerHTML = `¡Hola, ${this.nombre}! Este es mi primer componente.`;
      return elemento;
    }
  }
  
  // Instanciamos el componente y lo añadimos al DOM
  const app = document.getElementById('app');
  const miComponente = new MiComponente('Usuario');
  app.appendChild(miComponente.render());