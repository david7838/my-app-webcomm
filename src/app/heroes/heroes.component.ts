import { Component, OnInit } from '@angular/core';

import { Hero } from '../heros';
import { HEROES } from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'WindStorm',
  }

  heros = HEROES;
  selectedHero: Hero;

  constructor() {
    this.selectedHero = { id: 0, name: '' };
  }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}


