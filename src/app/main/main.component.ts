import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FooterComponent,
    TitleComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.sass'
})
export class MainComponent {

}
