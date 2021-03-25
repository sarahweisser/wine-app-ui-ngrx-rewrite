import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Wine } from '../wine';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineListComponent {
  pageTitle = 'Wines';

  @Input() errorMessage: string;
  @Input() wines: Wine[];
  @Input() displayCode: boolean;
  @Input() selectedWine: Wine;
  @Output() displayCodeChanged = new EventEmitter<void>();
  @Output() initializeNewWine = new EventEmitter<void>();
  @Output() wineWasSelected = new EventEmitter<Wine>();

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newWine(): void {
    this.initializeNewWine.emit();
  }

  wineSelected(wine: Wine): void {
    this.wineWasSelected.emit(wine);
  }

}
