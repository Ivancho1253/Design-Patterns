import { IObservable } from './IObservable';
import { IObserver } from './IObserver';

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
