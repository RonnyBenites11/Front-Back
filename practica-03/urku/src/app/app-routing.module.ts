import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PagesComponent } from './pages/pages/pages.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DesignStylesComponent } from './design-styles/design-styles.component';
import { FlexComponent } from './flex/flex.component';
import { MasonryComponent } from './masonry/masonry.component';
import { SwitchComponent } from './switch/switch.component';
import { StaticComponent } from './static/static.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'design-styles', component: DesignStylesComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'masonry', component: MasonryComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'static', component: StaticComponent },
  { path: '**', redirectTo: '/home' } // Ruta para manejar páginas no encontradas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
