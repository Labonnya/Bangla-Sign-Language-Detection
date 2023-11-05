import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSignRecognitionComponent } from './live-sign-recognition.component';

describe('LiveSignRecognitionComponent', () => {
  let component: LiveSignRecognitionComponent;
  let fixture: ComponentFixture<LiveSignRecognitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveSignRecognitionComponent]
    });
    fixture = TestBed.createComponent(LiveSignRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
