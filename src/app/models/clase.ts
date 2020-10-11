import { ObjectUnsubscribedError } from 'rxjs';
import {V4 as uuid} from 'uuid'

export class DestinoViaje {
	private selected:boolean;
	public servicios: string[];
	
	constructor(public nombre:string, public imageUrl:string, public votes:number = 0) {
		this.servicios = ['desayuno', 'cena']; 
	}

	isSelected(): boolean {
		return this.selected;
	}

	setSelected(s: boolean) {
		this.selected = s;
	}

	voteUp() {
		this.votes++;
	}

	voteDown() {
		this.votes--;
	}

	voteReset() {
		this.votes = 0;
	}
}