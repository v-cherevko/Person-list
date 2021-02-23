import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonCardComponent } from './components/person.card/person.card'
import { PersonDetailedComponent } from './components/person.detailed.card/person.detailed.card.component'
import { PersonFilterComponent } from './components/person.filter/filter.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    PersonDetailedComponent,
    PersonFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
