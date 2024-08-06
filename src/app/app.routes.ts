import { Route } from '@angular/router';

import { HomeComponent } from '../lib/public-api';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
];
