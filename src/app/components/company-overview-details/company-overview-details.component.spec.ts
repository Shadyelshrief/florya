import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOverviewDetailsComponent } from './company-overview-details.component';

describe('CompanyOverviewDetailsComponent', () => {
  let component: CompanyOverviewDetailsComponent;
  let fixture: ComponentFixture<CompanyOverviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOverviewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyOverviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
