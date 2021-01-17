import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../lista-personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas = PERSONAS;
  selectedPersona: Persona;
  show: boolean = true;
  texto: string =  "Ocultar detalles";

  constructor() {
   }

  ngOnInit(): void {
  }
  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

  cambiaEstado() {
    this.texto = (this.show) ?  "Ver detalles":"Ocultar detalles";
    this.show = !this.show; 
  }
}
