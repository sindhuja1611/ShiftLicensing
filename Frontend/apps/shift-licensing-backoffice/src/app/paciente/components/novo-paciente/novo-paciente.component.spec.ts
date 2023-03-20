import { PacienteFormComponent } from './../paciente-form/paciente-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NovoPacienteComponent } from './novo-paciente.component';

describe('NovoPacienteComponent', () => {
  let component: NovoPacienteComponent;
  let fixture: ComponentFixture<NovoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoPacienteComponent, PacienteFormComponent],
      imports: [ ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzToolTipModule,
        NzIconModule,
        NzLayoutModule,
        NzGridModule,
        NzSpaceModule,
        NoopAnimationsModule,
        HttpClientTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NovoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
