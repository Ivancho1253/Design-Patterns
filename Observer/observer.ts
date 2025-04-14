export interface IObserver {
  actualizar(mensaje: string): void;
}

export interface IObservable {
  suscribir(observador: IObserver): void;
  desuscribir(observador: IObserver): void;
  notificar(mensaje: string): void;
}

export class CanalYouTube implements IObservable {
  private suscriptores: IObserver[] = [];

  suscribir(observador: IObserver): void {
    this.suscriptores.push(observador);
  }

  desuscribir(observador: IObserver): void {
    this.suscriptores = this.suscriptores.filter(sub => sub !== observador);
  }

  notificar(mensaje: string): void {
    for (const suscriptor of this.suscriptores) {
      suscriptor.actualizar(mensaje);
    }
  }

  subirVideo(titulo: string): void {
    this.notificar(`Nuevo video: ${titulo}`);
  }
}

export class Suscriptor implements IObserver {
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

  suscribirseACanal(canal: IObservable): void {
    canal.suscribir(this);
  }

  desuscribirseDeCanal(canal: IObservable): void {
    canal.desuscribir(this);
  }
}