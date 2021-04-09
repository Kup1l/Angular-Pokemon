import { Location } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() id : number;
  pokemon : PokemonDetail;

  constructor(private pokemonService : PokemonService,private route : ActivatedRoute, private location : Location ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.id).subscribe(result => this.pokemon = result);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getPokemon();
  }

}
