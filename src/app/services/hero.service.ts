import { Injectable } from '@angular/core';

import {Hero} from '../interfaces/hero';
import {HEROES} from '../constants/mock-heroes';
import {MessageService} from './message.service';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: string | null): Observable<Hero | null | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === parseInt(<string>id)));
  }
}
