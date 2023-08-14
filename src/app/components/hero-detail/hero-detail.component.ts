import {Component, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: any;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.navigationService.back();
  }
}
