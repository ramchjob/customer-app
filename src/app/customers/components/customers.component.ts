import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from 'src/app/common/directives/highlight.directive';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
   viewProviders: [HighlightDirective]
})
export class CustomersComponent implements OnInit {
  isSpecial: boolean = false;
  currentClasses: Record<string, boolean> = {};
  canSave: boolean = true;
  isUnchanged: boolean = true;
  color = '';
  defaultColor ='greeen';
  constructor() { }

  ngOnInit(): void {
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

}
