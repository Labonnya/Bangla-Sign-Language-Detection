import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveModelComponent } from './live-model.component';

describe('LiveModelComponent', () => {
  let component: LiveModelComponent;
  let fixture: ComponentFixture<LiveModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
