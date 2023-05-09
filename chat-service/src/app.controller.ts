import { Controller, Get, Inject } from '@nestjs/common';
import {
  ClientGrpc
} from '@nestjs/microservices';
import { Observable, ReplaySubject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { AppService } from './app.service';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';

interface HeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}

@Controller('/chat')
export class AppController {
  constructor(private readonly appService: AppService, @Inject('HERO_PACKAGE') private readonly client: ClientGrpc) { }

  private heroService: HeroService;
  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }
  @Get()
  getMany(): Observable<Hero[]> {
    const ids$ = new ReplaySubject<HeroById>();
    ids$.next({ id: 1 });
    ids$.complete();

    const stream = this.heroService.findMany(ids$.asObservable());
    return stream.pipe(toArray());
  }

  @Get('/test')
  test(): any {
    return { data: 'Chat servive' };
  }
}
