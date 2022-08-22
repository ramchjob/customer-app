import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './components/customers.component';
import { HighlightDirective } from '../common/directives/highlight.directive';


@NgModule({
  declarations: [
    CustomersComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
