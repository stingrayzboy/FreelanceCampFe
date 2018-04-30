import { Component } from '@angular/core'
import { Document } from './document'
@Component({
	selector:'app',
	templateUrl:'./document.component.html'
	//template:'<h1>Documents Page</h1>'	
})
export class DocumentComponent {
	page_title:string="Yolo"
	documents:Document[]=[
		{	
			title:"Faraz",
			description:"This is a test",
			file_url:"boomla",
			updated_at:"string",
			image_url:"boomlaaaaa"
		},{	
			title:"Faraz2",
			description:"This is a test",
			file_url:"http://google.com",
			updated_at:"string",
			image_url:"boomlaaaaa"
		},{	
			title:"Faraz3",
			description:"This is a test",
			file_url:"boomla",
			updated_at:"string",
			image_url:"boomlaaaaa"
		}
	]
}