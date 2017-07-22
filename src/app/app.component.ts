/**
 * Angular Library/Framework
 */
import { Component } from '@angular/core';

/**
 * Component Decorator
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Component Class
 * Logic goes here
 */
export class AppComponent {
  title = 'My First Angular Application!';
}
