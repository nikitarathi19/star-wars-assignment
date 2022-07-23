import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Flims } from '../models/flims';
import { MenuContentComponent } from './main-content.component';

let selectedFlims: Flims;
describe('menu container', () => {
  let fixture: ComponentFixture<MenuContentComponent>;
  let app: MenuContentComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [MenuContentComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(MenuContentComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('selectedFlims should be same and emit event should be called with selectedFlims', () => {
    const spyValue = spyOn(app.onSelectedPersonChanged, 'emit');
    app.onMenuElementClick(selectedFlims);
    expect(spyValue).toHaveBeenCalledWith(selectedFlims);
  });
});
