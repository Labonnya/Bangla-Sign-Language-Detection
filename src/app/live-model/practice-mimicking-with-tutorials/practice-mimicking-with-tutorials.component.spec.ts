import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMimickingWithTutorialsComponent } from './practice-mimicking-with-tutorials.component';

describe('PracticeMimickingWithTutorialsComponent', () => {
  let component: PracticeMimickingWithTutorialsComponent;
  let fixture: ComponentFixture<PracticeMimickingWithTutorialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracticeMimickingWithTutorialsComponent]
    });
    fixture = TestBed.createComponent(PracticeMimickingWithTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
