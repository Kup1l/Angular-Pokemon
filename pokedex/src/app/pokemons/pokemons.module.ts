import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './components/pokedex/pokedex.component';



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports : [
    PokemonListComponent
  ]
})
export class PokemonsModule { }
