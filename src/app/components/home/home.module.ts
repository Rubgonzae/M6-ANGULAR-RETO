import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    MenuComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
