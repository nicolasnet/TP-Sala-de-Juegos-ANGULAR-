import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelTijerasComponent } from './piedra-papel-tijeras.component';

describe('PiedraPapelTijerasComponent', () => {
  let component: PiedraPapelTijerasComponent;
  let fixture: ComponentFixture<PiedraPapelTijerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTijerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelTijerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
