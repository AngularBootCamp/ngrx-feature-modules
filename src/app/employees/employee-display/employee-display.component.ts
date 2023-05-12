import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-display',
  template: '{{ employee }}'
})
export class EmployeeDisplayComponent {
  @Input() employee = '';
}
