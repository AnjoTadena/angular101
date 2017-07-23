import { Component, OnInit, AfterContentChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'app';
  @ViewChild('boundParagraph') boundParagraph: HTMLElement;
  ngOnInit() {
  	// console.log(boundParagraph);
  }

  ngAfterContentChecked() {
  	console.log(this.boundParagraph);
  }
}
