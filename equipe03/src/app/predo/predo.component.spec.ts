import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredoComponent } from './predo.component';

describe('PredoComponent', () => {
  let component: PredoComponent;
  let fixture: ComponentFixture<PredoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
