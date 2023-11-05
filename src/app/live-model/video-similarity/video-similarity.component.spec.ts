import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSimilarityComponent } from './video-similarity.component';

describe('VideoSimilarityComponent', () => {
  let component: VideoSimilarityComponent;
  let fixture: ComponentFixture<VideoSimilarityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSimilarityComponent]
    });
    fixture = TestBed.createComponent(VideoSimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
