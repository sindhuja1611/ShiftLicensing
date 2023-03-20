import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../../models/paciente.model';

@Component({
  selector: 'slb-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.less']
})
export class PacienteFormComponent implements OnInit {
  @Input() paciente!: Patient | undefined;
  @Output() save: EventEmitter<Patient> = new EventEmitter<Patient>();
  submitted = false;
  pacienteForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  savePaciente(): void {
    if (!this.pacienteForm.valid) return;
    this.save.emit(this.pacienteForm.value);
  }

  newPaciente(): void {
    this.submitted = false;
    this.createForm();
    this.paciente = undefined;
  }

  voltar(): void {
    this.router.navigate(['/pacientes']);
  }

  createForm(): void {
    this.pacienteForm = this.fb.group({
      id: [],
      name: [this.paciente?.name, [Validators.required]],
      cpf: [this.paciente?.cpf, [Validators.required]],
      birthDate: [this.paciente?.birthDate, [Validators.required, Validators.pattern(/\d/)]],
      email: [this.paciente?.email, [Validators.required, Validators.email]],
    });
  }

}
