import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
	@Output() clicked = new EventEmitter<string>();

	onClicked () {
		this.clicked.emit('It worked on event emitter!');
	}
}
