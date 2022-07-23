import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FlimPage } from '../models/flimpage';
import { Flims } from '../models/flims';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
})
export class MenuContentComponent {
  @Input() page!: FlimPage;

  @Output() onSelectedPersonChanged: EventEmitter<Flims> =
    new EventEmitter<Flims>();
  @Output() onPageChanged: EventEmitter<number> = new EventEmitter<number>();

  selectedFlims: Flims | null = null;

  onMenuElementClick(selectedFlims: Flims): void {
    this.selectedFlims = selectedFlims;
    this.onSelectedPersonChanged.emit(selectedFlims);
  }
}
