import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form-component.css']
})
export class PokemonFormComponent implements OnInit {

  constructor(private serv: PokemonService,
     private router: Router) { }


  Types: string[];
  @Input() pokemon: Pokemon;

  ngOnInit() {
    this.Types = this.serv.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked = ($event.target as HTMLInputElement).checked;
    if(isChecked) {
      this.pokemon.types.push(type);
    }
    else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string):boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    
    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    console.log('submit form !');
    this.serv.updatePokemon(this.pokemon).subscribe
    (() => this.router.navigate(['/pokemon',this.pokemon.id]));
   // this.router.navigate(['/pokemon',this.pokemon.id]);
  }
}
