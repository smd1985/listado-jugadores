import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorFormComponent } from './jugador-form.component';

describe('JugadorFormComponent', () => {
  let component: JugadorFormComponent;
  let fixture: ComponentFixture<JugadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
