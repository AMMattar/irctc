import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  imgOne: string = "../../../../assets/images/tripOne.svg";
  altOne: string = "first trip";
  textOne: string = 'Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from...';
  imgTwo: string = "../../../../assets/images/tripTwo.svg";
  altTwo: string = "second trip";
  textTwo: string = 'Kerala is a state in the Republic of India. It is in the south-west of the country. The west coast of the state is on...';
  imgThree: string = "../../../../assets/images/tripThree.svg";
  altThree: string = "third trip";
  textThree: string = 'Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the...';
}
