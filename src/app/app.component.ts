import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../lib';

@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'camie-riu-estate';
}
