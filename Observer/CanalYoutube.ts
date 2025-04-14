import { IObserver } from './IObserver';
import { IObservable } from './IObservable';

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
