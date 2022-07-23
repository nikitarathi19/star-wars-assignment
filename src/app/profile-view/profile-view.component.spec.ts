import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileViewComponent } from './profile-view.component';

describe('Profile View', () => {
  let fixture: ComponentFixture<ProfileViewComponent>;
  let app: ProfileViewComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProfileViewComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProfileViewComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
