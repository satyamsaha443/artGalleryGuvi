import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkdetailComponent } from './artworkdetail.component';

describe('ArtworkdetailComponent', () => {
  let component: ArtworkdetailComponent;
  let fixture: ComponentFixture<ArtworkdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkdetailComponent]
    });
    fixture = TestBed.createComponent(ArtworkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
