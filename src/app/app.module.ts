import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderForumComponent } from './components/header-forum/header-forum.component';
import { BodyComponent } from './components/bodyComponents/body/body.component';
import { FooterComponent } from './components/footerComponents/footer/footer.component';
import { PartnersCardComponent } from './components/footerComponents/partners-card/partners-card.component';
import { SocialmediaCardComponent } from './components/footerComponents/socialmedia-card/socialmedia-card.component';
import { CopyrightCardComponent } from './components/footerComponents/copyright-card/copyright-card.component';
import { LinksCardComponent } from './components/footerComponents/links-card/links-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderForumComponent,
    BodyComponent,
    FooterComponent,
    PartnersCardComponent,
    SocialmediaCardComponent,
    CopyrightCardComponent,
    LinksCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
