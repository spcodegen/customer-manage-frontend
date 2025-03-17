import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AboutUsComponent } from './page/about-us/about-us.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"about-us",
        component:AboutUsComponent
    },
];
