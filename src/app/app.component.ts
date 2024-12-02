import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoCardComponent } from '../../src/components/personal-info-card/personal-info-card.component';
import { MainInfoComponent } from '../../src/components/main-info/main-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PersonalInfoCardComponent,
    MainInfoComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
