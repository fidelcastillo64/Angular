// import modules from angular router
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// import components
import { ShoesComponent } from './shoes/shoes.component';
import { HolaComponent } from './hola/hola.component';
import { HomeComponent } from './home/home.component';
import { ExternalComponent } from './external/external.component';
import { ContactComponent } from './contact/contact.component';

//array of routes
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'shoes', component: ShoesComponent },
    { path: 'hola', component: HolaComponent },
    { path: 'hola/:name/:followers', component: HolaComponent },
    { path: 'external', component: ExternalComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];


//export RouterModule
export const AppRoutingModule : any[] = [];
export const routing: ModuleWithProviders <any> = RouterModule.forRoot(routes);

