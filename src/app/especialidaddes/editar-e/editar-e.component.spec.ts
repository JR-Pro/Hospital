import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEComponent } from './editar-e.component';

describe('EditarEComponent', () => {
  let component: EditarEComponent;
  let fixture: ComponentFixture<EditarEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
