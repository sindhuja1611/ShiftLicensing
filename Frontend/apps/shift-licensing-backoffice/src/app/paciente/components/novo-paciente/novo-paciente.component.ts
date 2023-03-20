import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Patient } from '../../models/paciente.model';
import { PatientService } from '../../services/paciente.service';

@Component({
  selector: 'slb-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.less']
})
export class NovoPacienteComponent {

  submitted = false;

  constructor(
    private pacienteService: PatientService,
    private router: Router,
    private fb: FormBuilder) { }

  savePaciente(paciente: Patient): void {
    this.pacienteService.create(paciente)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPaciente(): void {
    this.submitted = false;
  }

  voltar(): void {
    this.router.navigate(['/pacientes']);
  }

  createForm(paciente?: Patient): FormGroup {
    return this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array(paciente?.phone || [''])
    });
  }

}


