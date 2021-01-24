import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresListComponent } from './jugadores-list.component';

describe('JugadoresListComponent', () => {
  let component: JugadoresListComponent;
  let fixture: ComponentFixture<JugadoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
