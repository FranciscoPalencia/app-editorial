import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../models/libro.interface';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  foto='https://us.123rf.com/450wm/pelesh/pelesh1604/pelesh160400371/55736213-libro-cerrado-aislado-en-un-fondo-blanco.jpg?ver=6'
  @Input() libro!:Libro;

  constructor() { }

  ngOnInit(): void {
  }

}
