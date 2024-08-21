import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCanbanComponent } from './dashboard-canban.component';

describe('DashboardCanbanComponent', () => {
  let component: DashboardCanbanComponent;
  let fixture: ComponentFixture<DashboardCanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCanbanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
