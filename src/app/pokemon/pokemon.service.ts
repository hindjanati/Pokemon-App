import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, [])));
  }

  getPokemonById(PokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${PokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined)));
  } 

  updatePokemon(pokemon: Pokemon) : Observable<Pokemon|null> {
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
    tap((response) => this.log(response)),
    catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }; 
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );

  }

  searchPokemonList(term: string): Observable<Pokemon[]>{
    if(term.length<1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=> this.handleError(error, []))
    );
  }


  // getPokemonById(p: number): Pokemon|undefined {
  //   return POKEMONS.find(Pokemon => Pokemon.id == p);
  // } 

  private log(response: any) {
    console.table("response")
  }

  private handleError(error: Error, errorValue: any){
    console.log(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fee',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
