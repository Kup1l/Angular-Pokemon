import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  id : number;

  constructor() { }

  ngOnInit(): void {
    console.log('Test')
  }

  receiveId($event){
    console.log('Reception de :'+$event)
    this.id = $event
  }

}
