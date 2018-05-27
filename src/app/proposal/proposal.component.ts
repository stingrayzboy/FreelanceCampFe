import { Component,OnInit } from '@angular/core'
import { Proposal } from './proposal'
import { ProposalService } from './proposal.service'
import { Observable } from 'rxjs/Rx'
import { Router } from '@angular/router'


@Component({
	selector:'app',
	templateUrl:'./proposal.component.html',
	providers:[ProposalService],

	styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
	proposals:Proposal[]
	mode="Observable"
	errorMessage:string;
	constructor(
		private proposalsService:ProposalService,
		private router:Router
		){}
	ngOnInit(){
		let timer = Observable.timer(0, 5000)
		timer.subscribe(()=>this.getProposals())
	}
	getProposals(){
		this.proposalsService.getProposals()
			.subscribe(
				proposals => this.proposals = proposals,
				error => this.errorMessage = <any>error
				)
	}
	goToShow(proposal:Proposal):void{
		let link = ['/proposal',proposal.id]
		this.router.navigate(link)
	}
}