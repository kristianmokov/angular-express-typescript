import { Component } from '@angular/core';

@Component({
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    selector: 'app-header'
})
export class HeaderComponent {
    items: any[] = [
        {
            title: 'A'
        },
        {
            title: 'B'
        },
        {
            title: 'C'
        },
        {
            title:'M'
        }
    ]
}