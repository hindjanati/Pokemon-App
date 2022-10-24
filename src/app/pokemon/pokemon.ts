export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture : string;
  types: string[];
  created: Date;

  constructor(
    name = 'Entrer un nom...',
    hp = 100,
    cp= 10,
    picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types  = ['Normal'],
    created = new Date()
    )
 {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}