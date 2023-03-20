import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ListaPacientesComponent } from './lista-pacientes.component';

describe('ListaPacientesComponent', () => {
  let component: ListaPacientesComponent;
  let fixture: ComponentFixture<ListaPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzToolTipModule,
        NzIconModule,
        NzLayoutModule,
        NzGridModule,
        NzSpaceModule,
        NzTableModule
      ],
      declarations: [ ListaPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
