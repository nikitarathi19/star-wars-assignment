import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FlimPage } from './models/flimpage';
import { Flims } from './models/flims';
import { flimsListService } from './services/flims-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  page$: Observable<FlimPage> | undefined;
  selectedPerson: Flims | undefined;

  constructor(private flimsListService: flimsListService) {}

  ngOnInit(): void {
    this.loadData();
  }

  selectedPersonChanged(selectedPerson: Flims): void {
    this.selectedPerson = selectedPerson;
  }

  private loadData(pageNum: number = 1) {
    this.page$ = this.flimsListService.getFlimsPage(pageNum);
  }
}
