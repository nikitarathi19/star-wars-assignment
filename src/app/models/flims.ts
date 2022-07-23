import { Observable } from 'rxjs';
import { Character } from './character';

export interface Flims {
  title: string;
  director: string;
  producer: string;
  characters$: Observable<Character[]>;
  starships: string[];
  planets: string[];
}
