import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  id : number = Number(this.route.snapshot.paramMap.get('id'));
  pokemon : PokemonDetail;

  constructor(private pokemonService : PokemonService,private route : ActivatedRoute, private location : Location ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.id).subscribe(result => this.pokemon = result);
  }

}
