import { Injectable } from '@angular/core';
import { Doc } from './doc';
@Injectable({
  providedIn: 'root'
})
export class DocManageService {

  name = '';
  desc = '';
  docArr:Doc[] =[]
  constructor() { }
}
