import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVisionDetailsComponent } from './mission-vision-details.component';

describe('MissionVisionDetailsComponent', () => {
  let component: MissionVisionDetailsComponent;
  let fixture: ComponentFixture<MissionVisionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionVisionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionVisionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
