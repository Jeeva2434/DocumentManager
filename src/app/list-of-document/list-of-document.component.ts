import { Component, OnInit } from '@angular/core';
import { DocManageService } from '../doc-manage.service';
import { CreateDocumentComponent } from '../create-document/create-document.component';
import { UploadDocumentComponent } from '../upload-document/upload-document.component';
import { Doc } from '../doc';
@Component({
  selector: 'app-list-of-document',
  templateUrl: './list-of-document.component.html',
  styleUrls: ['./list-of-document.component.css']
})
export class ListOfDocumentComponent implements OnInit {

  constructor(private dm:DocManageService) { }
  docPrint:Doc[]=this.dm.docArr;
  
  ngOnInit(): void {
  }

 delete(list:Doc){
   for(let i=0;i<this.docPrint.length;i++){
     if(list.docName==this.docPrint[i].docName){
       this.docPrint.splice(i,1);
     }
   }
 }
}
