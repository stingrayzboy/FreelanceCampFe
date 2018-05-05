import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
	selector:'proposal',
	templateUrl:'./proposal-new.component.html'
})
export class ProposalNewComponent{
	proposal=new Proposal;
	}