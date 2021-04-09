import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model'
import { PokemonDetail } from '../../models/pokemon-detail.model'
import { PagedData } from 'src/app/models/paged-data.model';
import { catchError, tap } from 'rxjs/operators';
import { PokemonDetailComponent } from '../components/pokemon-detail/pokemon-detail.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl : string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io"

  constructor(private http : HttpClient) { }

  getPokemons(offset : number, limit : number) : Observable<PagedData<Pokemon>>{
    let url = this.apiUrl+'/pokemons?offset='+offset+'&limit='+limit;
    return this.http.get<PagedData<Pokemon>>(url).pipe(
      catchError(this.handleError<PagedData<Pokemon>>("getPokemons"))
    )
  }

  getPokemon(id : number) : Observable<PokemonDetail | undefined>{
    let url = this.apiUrl+'/pokemons/'+id;
    return this.http.get<PokemonDetail>(url).pipe(
      catchError(
        this.handleError<PokemonDetail>("getPokemon")
      )
    )
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
