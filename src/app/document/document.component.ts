import { Component,OnInit } from '@angular/core'
import { Document } from './document'
import { DocumentService } from './document.service'
import { Observable } from 'rxjs/Rx'

@Component({
	selector:'app',
	templateUrl:'./document.component.html',
	providers:[ DocumentService ]
	//template:'<h1>Documents Page</h1>'	
})
export class DocumentComponent implements OnInit{
	page_title:string="Yolo"
	documents:Document[]
	mode="Observable"
	errorMessage:string;
	constructor(
		private documentService:DocumentService
		){}
	ngOnInit(){
		let timer = Observable.timer(0, 5000)
		timer.subscribe(()=>this.getDocuments())
	}
	getDocuments(){
		this.documentService.getDocuments()
			.subscribe(
				documents => this.documents = documents,
				error => this.errorMessage = <any>error
				)
	}
}