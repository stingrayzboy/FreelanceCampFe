import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { AppComponent} from './app.component'
import { DocumentComponent} from './document/document.component'
import { ProposalComponent} from './proposal/proposal.component'
import { ProposalNewComponent} from './proposal/proposal-new.component'
import { ProposalShowComponent} from './proposal/proposal-show.component'


const routes:Routes = [
 	{ path: '' , redirectTo: '/home', pathMatch: 'full' },
 	{ path: 'home' ,component: HomepageComponent },
 	{ path: 'application' ,component: AppComponent },
 	{ path: 'document' ,component: DocumentComponent },
	{ path: 'proposal' ,component: ProposalComponent },
	{ path: 'proposals/new' ,component: ProposalNewComponent },
	{ path: 'proposal/:id' ,component: ProposalShowComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
