import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { Patient } from '../../models/paciente.model';
import { PatientService } from '../../services/paciente.service';

@Component({
  selector: 'slb-detalhe-paciente',
  templateUrl: './detalhe-paciente.component.html',
  styleUrls: ['./detalhe-paciente.component.less']
})
export class DetalhePacienteComponent implements OnInit {

  currentPaciente!: Patient;
  loading = true;
  message = '';

  constructor(
    private pacienteService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPaciente(this.route.snapshot.params["id"]);
  }

  getPaciente(id: number): void {
    this.pacienteService.get(id)
      .pipe(
        take(1),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (data) => {
          this.currentPaciente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePaciente(paciente: Patient): void {
    this.message = '';

    this.pacienteService.update(this.currentPaciente.id, paciente)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Paciente atualizado com sucesso!';
          this.voltar();
        },
        error: (e) => console.error(e)
      });
  }

  deletePaciente(): void {
    this.pacienteService.delete(this.currentPaciente.id)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/pacientes']);
        },
        error: (e) => console.error(e)
      });
  }

  voltar(): void {
    this.router.navigate(['/pacientes']);
  }

}