import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { name: 'IT Development', description: 'Custom software and application development.' },
    { name: 'IT Support', description: '24/7 support for your IT infrastructure.' },
    { name: 'Engineering Services', description: 'Innovative engineering solutions for your business.' },
    { name: 'DevOps', description: 'DevOps implementation.' }
  ];
}
