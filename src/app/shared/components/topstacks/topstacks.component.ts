import { Component } from '@angular/core';

@Component({
  selector: 'topstacks',
  templateUrl: './topstacks.component.html',
  styleUrls: ['./topstacks.component.scss']
})
export class TopstacksComponent {

  stacksArr:any[]=[
    {name:'Best Deal', icon:'assets/topstacks/4.png', des:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {name:'Pay with Easy', icon:'assets/topstacks/3.png', des:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {name:'Quick Delivery', icon:'assets/topstacks/2.png', des:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {name:'Secured Payment', icon:'assets/topstacks/1.png', des:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}
  ]

}
