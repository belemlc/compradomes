import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  title: string = "Bem vindo ao Dashboard"
}
