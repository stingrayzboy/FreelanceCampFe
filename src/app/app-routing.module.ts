import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomepageComponent } from './homepage/homepage.component'
import { AppComponent} from './app.component'
import { DocumentComponent} from './document/document.component'


const routes:Routes = [
 { path: '' , redirectTo: '/home', pathMatch: 'full' },
 { path: 'home' ,component: HomepageComponent },
 { path: 'application' ,component: AppComponent },
 { path: 'document' ,component: DocumentComponent }

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
