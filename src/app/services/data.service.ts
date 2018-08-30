import { Observable, of, from} from 'rxjs';
import { Star } from '../models/starModel';
import { User } from '../models/userModel';

export const starArray: Star[] = [
  {
    id: 'ID01',
    name: 'Makkara',
    details: 'annettiin makkarasta',
    creator: { name: 'Kalle'} as User,
    creationDate: new Date(),
    editedDate: new Date()
  },
  {
    id: 'ID02',
    name: 'Jakkara',
    details: 'annettiin hakkarasta',
    creator: { name: 'Pertti'} as User,
    creationDate: new Date(),
    editedDate: new Date()
  }
];



export class DataService {
  dummy: string;

  constructor() {}

  getItemsObs(): Observable<Star[]> {
    return of(starArray);
  }

  getItemsObj(): Star[] {
    return starArray;
  }

}
