import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  // {..."a"..."ab"..."abc"....}
  searchTerms = new Subject<string>();
  // {...PokemonList{a}.....PokemonList{ab}........}

  pokemons$: Observable<Pokemon[]>;

  constructor(private route: Router,
    private service: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a"."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......."ab"...."ab"...."abc".....}
      distinctUntilChanged(),
      // {......"ab"........."abc".......}
      switchMap((term) => this.service.searchPokemonList(term))
      //{...... Observable<"ab>......... Observable<"abc>.........}
      // concatMap / mergeMap / SwitchMap
    );
    
  }

  search(term: string){
    this.searchTerms.next(term);
  }

  gotoDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

}
