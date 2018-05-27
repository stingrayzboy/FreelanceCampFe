import { Component } from '@angular/core'
import { Proposal } from './proposal'
import { Observable } from 'rxjs/Rx'
import { ProposalService } from './proposal.service'

@Component({
	selector:'proposal',
	templateUrl:'./proposal-new.component.html',
	providers:[ ProposalService ]
})
export class ProposalNewComponent{
	proposal=new Proposal
	submitted:boolean=false
	
	constructor(private proposalService: ProposalService){}
	
	createProposal(proposal){
		this.submitted=true
		this.proposalService.createProposal(proposal)
			.subscribe( 
				data=>{ return true },
				error=>{
					console.log("error saving proposal")
					return Observable.throw(error)
				}
				)
	}
	
}