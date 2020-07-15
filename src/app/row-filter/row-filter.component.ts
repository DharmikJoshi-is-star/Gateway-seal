import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-row-filter',
  templateUrl: './row-filter.component.html',
  styleUrls: ['./row-filter.component.css'],
})
export class RowFilterComponent implements OnInit {
  @Input() row: any;

  @Input() parameter_values: any[] = [];

  @Input() conditions: any[] = [];

  @Output() deleteRowEventEmitter = new EventEmitter<any>();

  values: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onValuesEmitted(values_emitted) {
    console.log(values_emitted);
    this.values = values_emitted;
  }
  onParamEmitted(param_emitted) {
    this.row.parameter.name = param_emitted;
    console.log(this.row);
  }
  onConditionEmitted(condition_emitted) {
    this.row.parameter.conditions[0].name = condition_emitted;
    console.log(this.row);
  }
  createParam(): any {
    let condition_values = {
      name: '',
      values: [],
    };

    return condition_values;
  }
  addConditionValues() {
    this.row.parameter.conditions.push(this.createParam());
  }
  onClickDeleteCondValue(cv) {
    console.log('hello');
    const index = this.row.parameter.conditions.indexOf(cv);
    /*
    let index: number = -1;
    
    for (let i = 0; i < this.filter_param.length; i++) {
      const element = this.filter_param[i];
      if (element.id == paramId) {
        console.log(element);
        index = i;
      }
    }*/
    console.log(index);
    if (index >= 0) {
      this.row.parameter.conditions.splice(index, 1);
    }

    if (this.row.parameter.conditions.length == 0) {
      this.deleteRowEventEmitter.emit(this.row);
    }
  }
}
