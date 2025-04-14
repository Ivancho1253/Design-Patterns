import { IObserver } from "./IObserver";

export interface IObservable {
    suscribir(observador: IObserver): void;
    desuscribir(observador: IObserver): void;
    notificar(mensaje: string): void;
  }
  