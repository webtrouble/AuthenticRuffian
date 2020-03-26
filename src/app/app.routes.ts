import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WomenComponent } from './components/women/women.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },  // Ruta home
    { path: 'mujer', component: WomenComponent}, // Ruta mujer
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Ruta por si no hace match
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);