import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './variable/landing-page/landing-page.component';
import { ContactPageComponent } from './variable/contact-page/contact-page.component';
import { ProductPageComponent } from './variable/product-page/product-page.component';
import { PricingPageComponent } from './variable/pricing-page/pricing-page.component';
import { HeaderComponent } from './constant/header/header.component';
import { FooterComponent } from './constant/footer/footer.component';
import { CopyrightComponent } from './constant/copyright/copyright.component';
import { StickyHeaderComponent } from './constant/header/sticky-header.component.ts/sticky-header.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,  
    LandingPageComponent,
    ContactPageComponent,
    ProductPageComponent,
    PricingPageComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    StickyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
