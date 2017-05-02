import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	myType = '';
	title = 'Angular 2 project ...';
	imageUrl = 'https://angular.io/resources/images/logos/angular/angular.png';

	myMethod(event:any) {
		console.log(event);
	}

	myMethod2(event:any) {
		console.log('You hovered!');
	}

	userInput(event:any) {
		this.myType = event.target.value;
	}

}
