import { Circulo } from './Circulo';
import { Cuadrado } from './Cuadrado';
import { DibujarVisitor } from './DibujarVisitor';
import { IFigura } from './IFigura';

// Creamos un array de figuras.
const figuras: IFigura[] = [
  new Circulo(),
  new Cuadrado(),
];

// Creamos un visitante que va a operar sobre las figuras
const visitor = new DibujarVisitor();

// Recorremos cada figura y le pasamos el visitante
for (const figura of figuras) {
  figura.aceptar(visitor);
}
