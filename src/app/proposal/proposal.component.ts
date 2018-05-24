import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
	selector:'app',
	templateUrl:'./proposal.component.html',
	styleUrls: ['./proposal.component.css']
})
export class ProposalComponent{
	proposalOne:Proposal = new Proposal(1,'Faraz Noor','http://faraznoor.live',"Ruby",120,10,10,'faraznoor75@gmail.com')
	proposalTwo:Proposal = new Proposal(2,'Maria Noor','http://faraznoor.live',"Ruby",120,10,10,'faraznoor75@gmail.com')
	proposalThree:Proposal = new Proposal(3,'Boom Noor','http://faraznoor.live',"Ruby",120,10,10,'faraznoor75@gmail.com')
	proposals:Proposal[]=[this.proposalOne,this.proposalTwo,this.proposalThree]
}