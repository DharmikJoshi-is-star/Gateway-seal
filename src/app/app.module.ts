import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalFilterComponent } from './global-filter/global-filter.component';
import { RowFilterComponent } from './row-filter/row-filter.component';
import { ParameterComponent } from './parameter/parameter.component';
import { ConditionValueComponent } from './condition-value/condition-value.component';
import { MaterialModule } from './material/material.module';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@NgModule({
  declarations: [
    AppComponent,
    GlobalFilterComponent,
    RowFilterComponent,
    ParameterComponent,
    ConditionValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [ENTER, COMMA],
      },
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
