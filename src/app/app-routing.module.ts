import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { ListOfDocumentComponent } from './list-of-document/list-of-document.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

const routes: Routes = [
  {path:'',redirectTo:'create-document',pathMatch:'full'},
  {path:'create-document',component:CreateDocumentComponent},
  {path:'list-of-document',component:ListOfDocumentComponent},
  {path:'upload-document',component:UploadDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
