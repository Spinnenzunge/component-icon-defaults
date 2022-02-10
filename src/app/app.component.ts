import {Component} from '@angular/core';
import {addIcons} from 'ionicons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    addIcons({
      'search-sharp': 'assets/icon/search.svg',
      'search-outline': 'assets/icon/search.svg',
    });
  }
}
