import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Patient } from '../../models/paciente.model';
import { PatientService } from '../../services/paciente.service';

@Component({
  selector: 'slb-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.less']
})
export class ListaPacientesComponent implements OnInit {

  pacientes: Patient[] = [];

  currentIndex = -1;
  title = '';

  constructor(
    private pacienteService: PatientService) { }

  ngOnInit(): void {
    this.retrievePacientes();
  }

  retrievePacientes(): void {
    this.pacienteService.getAll()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.pacientes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePacientes();

    this.currentIndex = -1;
  }

}
