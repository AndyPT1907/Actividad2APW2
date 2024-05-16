import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprestamosComponent } from './gestionprestamos.component';

describe('GestionprestamosComponent', () => {
  let component: GestionprestamosComponent;
  let fixture: ComponentFixture<GestionprestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionprestamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
