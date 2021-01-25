import { Component, OnInit } from '@angular/core';

import { Hero } from '../heros';
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
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

  heros: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    this.selectedHero = { id: 0, name: '' };
    this.heros = [];
  }

  ngOnInit(): void {
    this.getHeroes();
    this.heroService.getA();
  }


  getHeroes(): void {
    this.heroService.getHeroes().subscribe(e => {
      this.heros = e
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}


