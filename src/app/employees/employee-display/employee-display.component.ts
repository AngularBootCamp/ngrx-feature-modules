import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-display',
  template: '{{ employee }}',
  standalone: true
})
export class EmployeeDisplayComponent {
  @Input() employee = '';
}
