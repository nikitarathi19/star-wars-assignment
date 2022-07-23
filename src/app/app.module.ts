import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { MenuContentComponent } from './main-content/main-content.component';
import { SideDataComponent } from './side-data/side-data.component';
import { flimsListService } from './services/flims-list.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProfileViewComponent,
    MenuContentComponent,
    SideDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BrowserModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [flimsListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
