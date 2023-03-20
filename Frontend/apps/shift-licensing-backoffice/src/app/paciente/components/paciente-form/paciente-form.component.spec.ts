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

import { PacienteFormComponent } from './paciente-form.component';

describe('PacienteFormComponent', () => {
  let component: PacienteFormComponent;
  let fixture: ComponentFixture<PacienteFormComponent>;
  let element : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzToolTipModule,
        NzIconModule,
        NzLayoutModule,
        NzGridModule,
        NzSpaceModule,
        NoopAnimationsModule ],
      declarations: [ PacienteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have 4 inputs', () => {
    expect(element.querySelectorAll('input')?.length).toBe(4);
  });

  it('should have register button', () => {
    expect(element.querySelectorAll('input')?.length).toBe(4);
  });

  it('should validate null name', () => {
    const nameInput : HTMLInputElement | null = element.querySelector('input');
    expect(nameInput).toBeDefined();
    if(nameInput){
      nameInput.value = 'a';
      nameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      nameInput.value = '';
      nameInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(element.querySelector('.ant-form-item-with-help')).toBeTruthy();
      expect(component.pacienteForm.dirty).toBeTruthy();
    }
  });

  it('should create form', () => {
    expect(component.pacienteForm).toBeDefined();
  });

});
