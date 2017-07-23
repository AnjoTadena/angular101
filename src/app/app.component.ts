import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1>This is inline template.</h1>
  `,
  styles: [`
  	h1 {
  		color: #737373;
  	}
   `]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
