import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css'],
})
export class ParameterComponent implements OnInit {
  @Input() parameter_values: any[] = [];
  parameter: any;
  @Output() valueEmitter = new EventEmitter<any>();
  @Output() paramEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onParameterSelect(changeEvent) {
    this.parameter = changeEvent.value;

    this.parameter_values.forEach((param) => {
      if (this.parameter.match(param.name)) {
        this.paramEmitter.emit(this.parameter);
        this.valueEmitter.emit(param.values);
      }
    });
  }
}
