import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.css'],
})
export class GlobalFilterComponent implements OnInit {
  filter_param: any[] = [];

  parameter_values: any[] = [
    {
      name: 'Import date',
      values: ['Today', 'Yesterday', 'Tommrow'],
    },
    {
      name: 'Company',
      values: ['BMW Germany', 'Severn Trent Water'],
    },
    {
      name: 'Company Address',
      values: ['Germany', 'USA'],
    },
  ];

  conditions: any[] = ['is', 'does not contain'];

  constructor() {
    this.filter_param.push(this.createParam());
  }

  ngOnInit(): void {}

  createParam() {
    let param = {
      parameter: {
        name: '',
        conditions: [
          {
            name: '',
            values: [],
          },
        ],
      },
    };
    return param;
  }
  addRow() {
    this.filter_param.push(this.createParam());
  }
  onClickDelete(param: any) {
    console.log('hello');
    const index = this.filter_param.indexOf(param);
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
      this.filter_param.splice(index, 1);
    }
  }
  onDeleteRowEvent(deleteRow) {
    if (this.filter_param.length > 1) this.onClickDelete(deleteRow);
  }
  applyFilter() {
    console.log(this.filter_param);
  }
}
