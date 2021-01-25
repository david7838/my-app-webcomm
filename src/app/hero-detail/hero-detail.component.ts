import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../heros';
import { HeroesComponent } from '../heroes/heroes.component';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.hero = {
      id: 0,
      name: '',
    };
    this.testId = "";
  }
  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  testId: string | null
  getHero(): void {
    this.testId = this.route.snapshot.paramMap.get('id');
    console.log(this.testId);
    const id = parseInt(this.testId || "");
    console.log(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
