import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  curso: string;
  nota: number;
};

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    {
      nombre: 'Alan',
      curso: 'Matemática',
      nota: 4
    },
    {
      nombre: 'Juan',
      curso: 'Lengua',
      nota: 8
    },
    {
      nombre: 'Maria',
      curso: 'Matemática',
      nota: 6
    },
    {
      nombre: 'Rocio',
      curso: 'Lengua',
      nota: 3
    },
    {
      nombre: 'Florencia',
      curso: 'Plastica',
      nota: 9
    },
    {
      nombre: 'Jose',
      curso: 'Computación',
      nota: 10
    }
  ]
}


