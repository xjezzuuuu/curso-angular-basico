import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
	constructor() {}

	public nuevo: Personaje = {
		nombre: 'Maestro Roshi',
		poder: 1000,
	};

	// public agregarNuevoPersonaje(personaje: Personaje): void {
	// 	this.personajes.push(personaje);
	// }
}
