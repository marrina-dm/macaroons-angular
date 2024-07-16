import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonsDirective } from './directives/buttons.directive';
import { DescriptionPipe } from './pipes/description.pipe';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    ButtonsDirective,
    DescriptionPipe,
    PhonePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    provideClientHydration(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
