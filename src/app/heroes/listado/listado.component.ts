import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
	constructor() {
		console.log('Constructor');
	}

	ngOnInit(): void {
		console.log('Init');
	}

	public heroes: string[] = [
		'Spiderman',
		'Iron Man',
		'Hulk',
		'Thor',
		'Capitan America',
	];
	public heroeBorrado: string = '';

	public borrarHeroe(): void {
		const hB: string = this.heroes.pop() || '';
		this.heroeBorrado = hB;
	}
}
