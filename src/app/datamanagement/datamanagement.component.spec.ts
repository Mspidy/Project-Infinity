import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanagementComponent } from './datamanagement.component';

describe('DatamanagementComponent', () => {
  let component: DatamanagementComponent;
  let fixture: ComponentFixture<DatamanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatamanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatamanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
