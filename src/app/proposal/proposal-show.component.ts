import { Component,OnInit,Input } from '@angular/core'
import { ActivatedRoute,Params} from '@angular/router'
import { Proposal } from './proposal'
import { Http,RequestOptions,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import { ProposalService } from './proposal.service'


@Component({
	selector:'proposal-show',
	templateUrl:'./proposal-show.component.html',
	providers:[ ProposalService ]
})
export class ProposalShowComponent implements OnInit{

		constructor(
			private route:ActivatedRoute,
			private proposalService:ProposalService,
			private http:Http
		){}

		@Input()
		proposal:Proposal

		ngOnInit():void{
			let proposalRequest=this.route.params
				.flatMap((params:Params)=>
					this.proposalService.getProposal(+params['id']))
			proposalRequest.subscribe(response => this.proposal = response.json())
		}
}