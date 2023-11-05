import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choise-card',
  templateUrl: './choise-card.component.html',
  styleUrls: ['./choise-card.component.scss']
})
export class ChoiseCardComponent {
  @Input() svg: any
  @Input() svgText: string = '';
}
