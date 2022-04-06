import { Component, OnInit } from '@angular/core';
import { Doc } from '../doc';
import { DocManageService } from '../doc-manage.service';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {

  public name:string = '';
  public desc:string = '';
  types = ["pdf","excel","word"];
  
  public dc = {} as Doc
 
  constructor(private dm:DocManageService) { }

  ngOnInit(): void {
  }
  getForm(name:string,desc:string){
    console.log(name);
    console.log(desc);
  
    this.dc.docName=name;
    this.dc.docDesc=desc;
    this.dm.docArr.push(this.dc);
  
    console.log(this.dm.docArr);
  }
}
