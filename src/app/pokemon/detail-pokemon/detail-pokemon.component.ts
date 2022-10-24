import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  poke: Pokemon|undefined;

  constructor(private route: ActivatedRoute,
     private router: Router,
     private pokemonService: PokemonService) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      //this.poke = this.pokemonService.getPokemonById(+pokemonId); 
      this.pokemonService.getPokemonById(+pokemonId)
     .subscribe(p => this.poke = p);
     console.table(this.poke);
    }
  }
  
  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goBack());
  }

  goBack(){
    this.router.navigate(['/pokemons'])
  }
  
}
