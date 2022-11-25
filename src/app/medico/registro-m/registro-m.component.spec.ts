import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMComponent } from './registro-m.component';

describe('RegistroMComponent', () => {
  let component: RegistroMComponent;
  let fixture: ComponentFixture<RegistroMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
