import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon';
import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
}) 
export class AppComponent implements OnInit {
  
  pokemonList = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  st: string ;
  ngOnInit() {
    console.table(this.pokemonList);
    //this.selectPokemon(this.pokemonSelected);
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(p =>p.id== +pokemonId)

    //this.pokemonSelected = this.pokemonList[id];
    if(pokemon){
      console.log(`vous avez clique sur le pokemon : ${pokemon?.name}`)
      this.pokemonSelected=pokemon;
    }
    else{
      console.log(`existe pas !`)
      this.pokemonSelected=pokemon;
    }
    //console.log("vous avez clique sur le pokemon :"+pokemon); //// not the best 
  }
}
   
