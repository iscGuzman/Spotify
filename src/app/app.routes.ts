import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo:  'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];



/* Client ID  75f6af0e34304ec48b230bc680bda0b5
Client Secret caf9704feb574bc091463ff4937be18d 


{
    "access_token": "BQALz2J1lfTKYCK-wCwj394oWl1v4jEWNsK3dtcVnr3n25ZX9B-nnYU5D4ftYTNep4_kEZbFMT3q5DIm3IQ",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": ""
}
*/