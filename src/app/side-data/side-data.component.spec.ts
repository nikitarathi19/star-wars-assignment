import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideDataComponent } from './side-data.component';

describe('menu Element', () => {
  let fixture: ComponentFixture<SideDataComponent>;
  let app: SideDataComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SideDataComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SideDataComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
