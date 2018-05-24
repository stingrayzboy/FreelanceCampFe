import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { HomepageComponent } from './homepage/homepage.component'
import { AppComponent } from './app.component'
import { DocumentComponent } from './document/document.component'
import { DocumentService } from './document/document.service'
import { ProposalComponent } from './proposal/proposal.component'
import { ProposalNewComponent} from './proposal/proposal-new.component'
import { ProposalShowComponent} from './proposal/proposal-show.component'


@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    DocumentComponent,
    ProposalComponent,
    ProposalNewComponent,
    ProposalShowComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
