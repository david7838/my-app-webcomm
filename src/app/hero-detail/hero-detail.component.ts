import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../heros';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() {
    this.hero = {
      id: 0,
      name: '',
    }
  }
  @Input()
  hero: Hero;

  ngOnInit(): void {
  }

}
