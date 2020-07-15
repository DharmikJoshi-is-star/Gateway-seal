import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-condition-value',
  templateUrl: './condition-value.component.html',
  styleUrls: ['./condition-value.component.css'],
})
export class ConditionValueComponent implements OnInit {
  @Input() values: any[] = [];
  @Input() conditions: any[] = [];
  @Output() condEmitter = new EventEmitter<any>();
  @Input() condition_values: any;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  valueCtrl = new FormControl();
  filteredValues: Observable<any[]>;
  selected_value: any[] = [];
  @ViewChild('valueInput') valueInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoValue') autoValue: MatAutocomplete;

  constructor() {
    this.constructor_Filter_value();
  }

  ngOnInit(): void {}

  onConditionSelect(conditionSelectEvent) {
    console.log(conditionSelectEvent.value);
    this.condition_values.name = conditionSelectEvent.value;
  }

  addValue(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selected_value.push(value.trim());

      //console.log('selected: ' + this.selected_value);
      this.condition_values.values = this.selected_value;
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.valueCtrl.setValue(null);
  }

  removeValue(v: String) {
    const index = this.selected_value.indexOf(v);

    if (index >= 0) {
      this.selected_value.splice(index, 1);
    }
  }

  selectedValue(event: MatAutocompleteSelectedEvent): void {
    this.selected_value.push(event.option.viewValue);
    this.condition_values.values = this.selected_value;
    this.valueInput.nativeElement.value = '';
    this.valueCtrl.setValue(null);
  }

  private _filter_value(value: String): String[] {
    const filterValue = value.toLowerCase();

    return this.values.filter(
      (val) => val.toLowerCase().indexOf(filterValue) === 0
    );
  }

  constructor_Filter_value() {
    this.filteredValues = this.valueCtrl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) =>
        value ? this._filter_value(value) : this.values.slice()
      )
    );
  }
}
