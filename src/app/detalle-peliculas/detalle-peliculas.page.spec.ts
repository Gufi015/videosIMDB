import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculasPage } from './detalle-peliculas.page';

describe('DetallePeliculasPage', () => {
  let component: DetallePeliculasPage;
  let fixture: ComponentFixture<DetallePeliculasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePeliculasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePeliculasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
