import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalenceComponent } from './balence.component';

describe('BalenceComponent', () => {
  let component: BalenceComponent;
  let fixture: ComponentFixture<BalenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
