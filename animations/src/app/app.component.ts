import { 
	Component,
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes
} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	animations: [
	
		trigger('focusPanel', [
			state('inactive', style({
				transform: 'scale(1)',
				backgroundColor: '#EEEEEE'
			})),
			state('active', style({
				transform: 'scale(1.1)',
				backgroundColor: '#CFD8Dc'
			})),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		]),

		trigger('movePanel', [
			transition('void => *', [
				// style({transform: 'translateY(-100%)'}),
				// animate(100)
				animate(600, keyframes([
					style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
					style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
					style({opacity: 1, transform: 'translateY(0)', offset: 1})
				]))
			])
		])

	]
})

export class AppComponent {

	title = 'Angular 2 project ...';

	state: string = 'inactive';

	toggleMove() {
		// console.log('Clicked!');
		this.state = (this.state === 'inactive' ? 'active' : 'inactive');
	}

}
