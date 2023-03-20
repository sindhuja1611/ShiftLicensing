import { NovoPacienteComponent } from './components/novo-paciente/novo-paciente.component';
import { DetalhePacienteComponent } from './components/detalhe-paciente/detalhe-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { Route } from '@angular/router';

export const pacienteRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'novo-paciente', component: NovoPacienteComponent },
  { path: ':id', component: DetalhePacienteComponent }
];
