import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipesInAngular16';
  employees : any=[
    {
      code:'101',
      name:'dinesh',
      age:'23',
      salary:'550000'
  },{
    code:'102',
      name:'dineshyaduvanshee',
      age:'23',
      salary:'670000'
  },{
    code:'103',
      name:'Devesh',
      age:'30',
      salary:'450000'
  },{
    code:'104',
      name:'Pavan',
      age:'27',
      salary:'56000'
  },{
    code:'105',
      name:'Ravi',
      age:'28',
      salary:'557000'
  },{
    code:'106',
      name:'Pihu',
      age:'28',
      salary:'557000'
  }

]



}
