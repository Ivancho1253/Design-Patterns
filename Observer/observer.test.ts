import { CanalYouTube } from './CanalYoutube';
import { Suscriptor } from './Suscriptor';

describe('Patrón Observer - Canal de YouTube', () => {
  test('Debe notificar al suscriptor cuando se sube un video', () => {
    const canal = new CanalYouTube();
    const juan = new Suscriptor("Juan");

    juan.suscribirseACanal(canal);
    canal.subirVideo("Curso de TypeScript");

    expect(juan.obtenerNotificacion()).toBe("Nuevo video: Curso de TypeScript");
  });

  test('No debe notificar al suscriptor si se desuscribió', () => {
    const canal = new CanalYouTube();
    const juan = new Suscriptor("Juan");

    juan.suscribirseACanal(canal);
    juan.desuscribirseDeCanal(canal);
    canal.subirVideo("Video de prueba");

    expect(juan.obtenerNotificacion()).toBe("");
  });

  test('Debe notificar solo a los suscriptores activos', () => {
    const canal = new CanalYouTube();

    const ivancho = new Suscriptor("Ivan");
    const rodri = new Suscriptor("Rodri");
    const augusto = new Suscriptor("Augusto");

    // Todos se suscriben
    ivancho.suscribirseACanal(canal);
    rodri.suscribirseACanal(canal);
    augusto.suscribirseACanal(canal);

    ivancho.desuscribirseDeCanal(canal);

    canal.subirVideo("Nuevo tutorial de programación");

    expect(augusto.obtenerNotificacion()).toBe("Nuevo video: Nuevo tutorial de programación");
    expect(rodri.obtenerNotificacion()).toBe("Nuevo video: Nuevo tutorial de programación");
    expect(ivancho.obtenerNotificacion()).toBe(""); 
  });
});