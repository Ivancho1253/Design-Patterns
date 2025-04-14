export interface Observador {
  actualizar(mensaje: string): void;
}

export class Suscriptor implements Observador {
  private ultimoMensaje = "";
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  actualizar(mensaje: string): void {
    this.ultimoMensaje = mensaje;
  }

  obtenerNotificacion(): string {
    return this.ultimoMensaje;
  }

  suscribirseACanal(canal: CanalYouTube): void {
    canal.suscribir(this);
  }

  desuscribirseDeCanal(canal: CanalYouTube): void {
    canal.desuscribir(this);
  }
}

export class CanalYouTube {
  private suscriptores: Observador[] = [];

  suscribir(observador: Observador): void {
    this.suscriptores.push(observador);
  }

  desuscribir(observador: Observador): void {
    this.suscriptores = this.suscriptores.filter(sub => sub !== observador);
  }

  notificar(mensaje: string): void {
    this.suscriptores.forEach(sub => sub.actualizar(mensaje));
  }

  subirVideo(titulo: string): void {
    this.notificar(`Nuevo video: ${titulo}`);
  }
}
