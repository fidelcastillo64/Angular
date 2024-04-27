import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, AppRoutingModule } from './app.routing';
import { HttpClientModule, withFetch } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HolaComponent } from './hola/hola.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HomeComponent } from './home/home.component';
import { ExternalComponent } from './external/external.component';
import { CalculatorPipe } from '../pipes/cuculator.pipe';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    ShoesComponent,
    HomeComponent,
    ExternalComponent,
    CalculatorPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
