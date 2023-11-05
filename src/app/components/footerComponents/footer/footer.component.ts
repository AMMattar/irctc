import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  rowOne: string[] = [
    "IRCTC Trains",
    "General Information",
    "Important Information",
    "Agents",
    "Enquiries"
  ]
  rowTwo: string[] = [
    "How To",
    "IRCTC Official App",
    "Advertise with us",
    "Refund Rules",
    "Person with Disability Facilities"
  ]
  rowThree: string[] = [
    "IRCTC eWallet",
    "IRCTC Loyalty Program",
    "IRCTC-iPAY Payment Gateway",
    "IRCTC Zone",
  ]
  rowFour: string[] = [
    "For Newly Migrated Agents",
    "Mobile Zone",
    "Policies",
    "Ask Disha Chatbot",
    "About Us"
  ]
}
