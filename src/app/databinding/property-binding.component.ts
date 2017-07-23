import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>
      Result: {{result}}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result: number = 0;

}
