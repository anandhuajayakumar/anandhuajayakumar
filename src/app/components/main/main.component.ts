import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  items: any[] = [
    {
      title: 'Home', path: 'home'
    },
    {
      title: 'Text', path: 'text'
    },
    {
      title: 'Video', path: 'video'
    }
  ];
}
