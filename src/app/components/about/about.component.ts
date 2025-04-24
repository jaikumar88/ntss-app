import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  companyName = 'STAR WORLDWIDE GENERAL SERVICES INC';
  description = 'We are a leading provider of IT development, support, and engineering services.';
}
