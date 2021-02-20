import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTutComponent } from './route-tut.component';

describe('RouteTutComponent', () => {
  let component: RouteTutComponent;
  let fixture: ComponentFixture<RouteTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteTutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
