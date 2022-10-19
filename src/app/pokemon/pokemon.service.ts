import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonLisr(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(PokemonId: number): Pokemon|undefined{
    return POKEMONS.find(p => p.id == PokemonId);
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
