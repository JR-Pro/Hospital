import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidaddesComponent } from './especialidaddes.component';

describe('EspecialidaddesComponent', () => {
  let component: EspecialidaddesComponent;
  let fixture: ComponentFixture<EspecialidaddesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidaddesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidaddesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
