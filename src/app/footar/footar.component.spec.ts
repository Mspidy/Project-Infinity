import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootarComponent } from './footar.component';

describe('FootarComponent', () => {
  let component: FootarComponent;
  let fixture: ComponentFixture<FootarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
