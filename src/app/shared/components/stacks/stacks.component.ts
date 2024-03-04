import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit{

  constructor(){}
  stackData:any[]=[
    {title:'Happy Customers', count:'138,098', icon:'assets/stackf/1.png'},
    {title:'Book Collections', count:'30,000K', icon:'assets/stackf/2.png'},
    {title:'Our Store Around the World', count:'1,269', icon:'assets/stackf/3.png'}
  ]
  ngOnInit(): void {
      
  }
}
