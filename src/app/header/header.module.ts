import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { CardProductComponent } from './popular-product/card-product/card-product.component';
import { AboutComponent } from './about/about.component';
import { SpecialMenuComponent } from './special-menu/special-menu.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
 


@NgModule({
  declarations: [
     
  
    PopularProductComponent,
             CardProductComponent,
             AboutComponent,
             SpecialMenuComponent,
             TestmonialComponent
  ],
  imports: [
    CommonModule,
      
  ]
})
export class HeaderModule { }
