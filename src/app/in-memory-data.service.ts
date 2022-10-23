import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon';
import { InMemoryDbService} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMONS;
    return { pokemons };
  }
}
