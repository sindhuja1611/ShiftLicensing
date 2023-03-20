import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'pacientes',
    loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)
  }
];
