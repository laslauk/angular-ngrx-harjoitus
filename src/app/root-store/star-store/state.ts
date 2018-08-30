import { createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import { Star } from '../../models/starModel';

export const adapter: EntityAdapter<Star> = createEntityAdapter<Star>({
  selectId: (star: Star) => star.id,
  sortComparer: (a: Star, b: Star): number =>
    b.creationDate.toString().localeCompare(a.creationDate.toString())
});

export interface StarState extends EntityState<Star> {
  isLoading?: boolean;
  error?: any;
}

export  const initialState: StarState = adapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
