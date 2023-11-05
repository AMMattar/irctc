import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() text: string = '';
  readMore: string = "Read More";
}
