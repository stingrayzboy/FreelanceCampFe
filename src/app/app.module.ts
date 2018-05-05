import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module'
import { HomepageComponent } from './homepage/homepage.component'
import { AppComponent } from './app.component'
import { DocumentComponent } from './document/document.component'
import { ProposalComponent } from './proposal/proposal.component'
import { ProposalNewComponent} from './proposal/proposal-new.component'


@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    DocumentComponent,
    ProposalComponent,
    ProposalNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
