import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DesignStylesComponent } from './design-styles/design-styles.component';
import { FlexComponent } from './flex/flex.component';
import { SwitchComponent } from './switch/switch.component';
import { StaticComponent } from './static/static.component';
import { MasonryComponent } from './masonry/masonry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    BlogComponent,
    HomeComponent,
    PortafolioComponent,
    PagesComponent,
    ContactusComponent,
    AboutComponent,
    DocumentationComponent,
    DesignStylesComponent,
    FlexComponent,
    SwitchComponent,
    StaticComponent,
    MasonryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
