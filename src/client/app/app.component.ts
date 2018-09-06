import { Component } from '@angular/core';

interface ICard {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cards: ICard[] = [
    {
      title: 'AVATRTH',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    },
    {
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet',
      image: 'http://via.placeholder.com/350x150'
    }
  ];

  click() {
    alert('clicked');
  }
}
