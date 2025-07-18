import { Routes } from '@angular/router';
import { ClothingListComponent } from './clothing-list/clothing-list';
import { ToiaAbout } from './toia-about/toia-about';
import { ToiaClothes } from './toia-clothes/toia-clothes';

export const routes: Routes = [
    {path: "", 
    redirectTo: "clothes",
    pathMatch: "full"  
    },
    {path: 'clothes', component: ToiaClothes},
    {path: 'about', component: ToiaAbout},
];
