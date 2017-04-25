import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
	/*template: `
		<p>Angular 2 project ...</p>
		<ul>
			<li>Item number 1</li>
			<li>Item number 2</li>
		</ul>
	`,
	styles: [`
		p {
			font-weight: bold;
		}
		ul li {
			text-decoration: underline;
		}
	`]*/
})

export class AppComponent {
  title = 'Angular 2 project ...';
}
