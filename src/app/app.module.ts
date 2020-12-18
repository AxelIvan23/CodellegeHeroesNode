import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { HerosComponent } from './component/heros/heros.component';
import { AboutComponent } from './component/about/about.component';

import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { HeroComponent } from './component/hero/hero.component';
import { Router } from "@angular/router";
import { BuscadorComponent } from './component/buscador/buscador.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import { MyHeroComponent } from './component/my-hero/my-hero.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    ErrorComponent,
    HeroComponent,
    BuscadorComponent,
    PruebaComponent,
    PipeComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe,
    MyHeroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'heros', component: HerosComponent},
      {path: 'about', component: AboutComponent},
      {path: 'pipe', component: PipeComponent},
      {path: 'active', component: MyHeroComponent},
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent},
      {path: '**', pathMatch: 'full', component: ErrorComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
