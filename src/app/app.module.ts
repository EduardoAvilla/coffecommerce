import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { PopularProductComponent } from './header/popular-product/popular-product.component';
import { CardProductComponent } from './header/popular-product/card-product/card-product.component';
import { ServiceComponent } from './service/service.component';
import { CardServiceComponent } from './service/card-service/card-service.component';
import { AboutComponent } from './header/about/about.component';
import { SpecialMenuComponent } from './header/special-menu/special-menu.component';
import { TestmonialComponent } from './header/testmonial/testmonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    PopularProductComponent,
    CardProductComponent,
    ServiceComponent,
    CardServiceComponent,
    AboutComponent,
    SpecialMenuComponent,
    TestmonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
