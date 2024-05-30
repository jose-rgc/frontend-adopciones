import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: '',
    data: {
      title: 'Base'
    },
    children: [
        {
          path: '',
          redirectTo: 'cards',
          pathMatch: 'full'
        },
        {
          path: 'adopcion',
          loadComponent: () => import('./adopcion/adopcion.component').then(m => m.AdopcionComponent),
          data: {
            title: 'Adopcion'
          }
        },
        {
          path: 'reportes',
          loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
          data: {
            title: 'Reportes'
          }
        },
    ]
    }
]