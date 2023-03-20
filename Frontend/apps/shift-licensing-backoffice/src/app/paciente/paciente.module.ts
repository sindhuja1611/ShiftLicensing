import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { DetalhePacienteComponent } from './components/detalhe-paciente/detalhe-paciente.component';
import { NovoPacienteComponent } from './components/novo-paciente/novo-paciente.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { pacienteRoutes } from './paciente.routes';
import { ListaPacientesComponent } from './pages/lista-pacientes/lista-pacientes.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    ListaPacientesComponent,
    DetalhePacienteComponent,
    NovoPacienteComponent,
    PacienteFormComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzToolTipModule,
    NzIconModule,
    NzLayoutModule,
    NzTableModule,
    NzGridModule,
    NzSpaceModule,
    RouterModule.forChild(pacienteRoutes),
  ],
})
export class PacienteModule {}
