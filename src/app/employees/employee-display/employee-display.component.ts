import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-display',
  template: '{{ employee }}'
})
export class EmployeeDisplayComponent {
  @Input() employee = '';
}
