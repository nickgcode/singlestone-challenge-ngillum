import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyDataService } from './services/companyData.service';
import { HttpModule, Http } from '@angular/http';
import { TeamListComponent } from './components/teamListComponent/teamList.component';
import { NoopAnimationPlayer } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    CompanyDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
