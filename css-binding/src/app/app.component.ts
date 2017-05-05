import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'Angular 2 project ...';

	someProperty = true;
	anotherProperty = true;

	setClasses() {
		let classes = {
			extraclass: this.someProperty,
			anotherProperty: this.anotherProperty
		};
		return classes;
	}

	setStyles() {
		let styles = {
			'font-style': this.someProperty ? 'italic' : 'normal',
			'font-weight': this.anotherProperty ? 'bold' : 'normal'
		};
		return styles;
	}

}
