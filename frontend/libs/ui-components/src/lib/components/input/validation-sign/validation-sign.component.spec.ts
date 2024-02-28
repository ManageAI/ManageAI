import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationSignComponent } from './validation-sign.component';

describe('ValidationSignComponent', () => {
  let component: ValidationSignComponent;
  let fixture: ComponentFixture<ValidationSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationSignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
