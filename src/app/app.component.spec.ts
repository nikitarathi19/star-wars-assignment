import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AppComponent } from './app.component';
import { FlimPage } from './models/flimpage';
import { Flims } from './models/flims';
import { flimsListService } from './services/flims-list.service';

let selectedPerson: Flims;
class MockflimsListService {
  getFlimsPage(pageNum: number = 1): Observable<any> {
    return of({});
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: flimsListService, useClass: MockflimsListService },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.ngOnInit();
  });

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it('should selectedPersonChanged should be same as selectedPerson', () => {
    app.selectedPersonChanged(selectedPerson);
    expect(app.selectedPerson).toEqual(selectedPerson);
  });
});