import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-agregar',
	templateUrl: './agregar.component.html',
	styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
	constructor(private dbzService: DbzService) {}
	@Input() nuevo: Personaje = {
		nombre: '',
		poder: 0,
	};

	// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

	public agregar(): void {
		if (this.nuevo.nombre.trim().length === 0) {
			return;
		}

		this.dbzService.agregarPersonaje(this.nuevo);
		// this.onNuevoPersonaje.emit(this.nuevo); Otra manera de hacerlo
		this.nuevo = {
			nombre: '',
			poder: 0,
		};
	}
}
