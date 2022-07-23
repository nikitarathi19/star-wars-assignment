import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlimPage } from '../models/flimpage';
import { Character } from '../models/character';

@Injectable()
export class flimsListService {
  constructor(private httpClient: HttpClient) {}

  getFlimsPage(pageNum: number = 1): Observable<FlimPage> {
    return this.httpClient.get(this.getFilmResponse(pageNum)).pipe(
      map((swapiPeoplePage: any) => {
        return this.createFlimPageFromResponse(pageNum, swapiPeoplePage);
      })
    );
  }

  private createFlimPageFromResponse(pageNum: number, swapiPeoplePage: any) {
    const flimPage: FlimPage = {
      pageNum: pageNum,
      results: swapiPeoplePage.results.map((flimsDeatils: any) => {
        return {
          title: flimsDeatils.title,
          director: flimsDeatils.director,
          producer: flimsDeatils.producer,
          starships: flimsDeatils.starships,
          planets: flimsDeatils.planets,
          characters$: forkJoin(
            flimsDeatils.characters.map((starshipUrl: string) =>
              this.httpClient.get<Character>(starshipUrl)
            )
          ) as Observable<Character[]>,
        };
      }),
    };
    return flimPage;
  }

  private getFilmResponse(page: number): string {
    return `http://swapi.dev/api/films/?page=${page}`;
  }
}
