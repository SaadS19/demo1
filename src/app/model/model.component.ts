import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  @Input() data: any;
  constructor() {}
}
