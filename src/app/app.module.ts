import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { HomepageComponent } from './homepage/homepage.component'
import { AppComponent } from './app.component'
import { DocumentComponent } from './document/document.component'



@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
