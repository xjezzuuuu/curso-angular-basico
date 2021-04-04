import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable()
export class DbzService {
	constructor() {}

	private _personajes: Personaje[] = [
		{
			nombre: 'Goku',
			poder: 15000,
		},
		{
			nombre: 'Vegeta',
			poder: 8500,
		},
	];

	get personajes(): Personaje[] {
		return [...this._personajes];
	}

	agregarPersonaje(personaje: Personaje): void {
		this._personajes.push(personaje);
	}
}
