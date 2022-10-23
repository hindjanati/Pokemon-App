import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon';
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

  // getPokemonById(p: number): Pokemon|undefined {
  //   return POKEMONS.find(Pokemon => Pokemon.id == p);
  // } 

  private log(response: Pokemon[]|Pokemon|undefined) {
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
