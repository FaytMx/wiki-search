import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searh-bar',
  templateUrl: './searh-bar.component.html',
  styleUrls: ['./searh-bar.component.css'],
})
export class SearhBarComponent implements OnInit {
  @Output() submitted= new EventEmitter<string>();
  term = '';
  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event) {
    event.preventDefault();
   this.submitted.emit(this.term);
  }
}
