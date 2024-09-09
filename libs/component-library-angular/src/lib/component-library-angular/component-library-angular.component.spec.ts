import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentLibraryAngularComponent } from './component-library-angular.component';

describe('ComponentLibraryAngularComponent', () => {
  let component: ComponentLibraryAngularComponent;
  let fixture: ComponentFixture<ComponentLibraryAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLibraryAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLibraryAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
