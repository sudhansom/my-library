import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentsComponent } from './ng-components.component';

describe('NgComponentsComponent', () => {
  let component: NgComponentsComponent;
  let fixture: ComponentFixture<NgComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
