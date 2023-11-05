import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCameraModelComponent } from './register-camera-model.component';

describe('RegisterCameraModelComponent', () => {
  let component: RegisterCameraModelComponent;
  let fixture: ComponentFixture<RegisterCameraModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCameraModelComponent]
    });
    fixture = TestBed.createComponent(RegisterCameraModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
