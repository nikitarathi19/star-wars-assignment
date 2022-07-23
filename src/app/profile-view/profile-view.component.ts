import { Component, Input, OnChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnChanges {
  @Input() flims: any;
  public rowData: any;

  public columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Height', field: 'height' },
    { headerName: 'Birth Year', field: 'birth_year' },
    { headerName: 'Gender', field: 'gender' },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true
  };

  ngOnChanges() {
    this.flims.characters$.subscribe((data: any) => {
      this.rowData = data;
    });
  }
}
