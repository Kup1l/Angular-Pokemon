import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    InfiniteScrollModule
  ],
  exports : [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
