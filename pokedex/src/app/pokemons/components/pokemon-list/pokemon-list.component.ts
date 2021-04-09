import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons : Pokemon[] = [];
  offset : number = 0;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(20);
  }

  getPokemons(limit : number){
    this.pokemonService.getPokemons(this.offset, limit).subscribe(result => this.pokemons = this.pokemons.concat(result.data));
    this.offset += 20
  }

  onScroll(){
    this.getPokemons(20)
  }
}
