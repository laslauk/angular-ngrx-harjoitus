import { createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import { Star } from '../../models/starModel';
import { adapter, StarState } from './state';

export const getError = (state: StarState): any => state.error;
export const getIsLoading = (state: StarState): boolean => state.error;

export const selectStarState = createFeatureSelector<StarState>('star');

export const selectAllStarItems: (state: object) => Star[] = adapter.getSelectors(selectStarState).selectAll;

export const selectStarById = (id: string) => createSelector(this.selectAllStarItems,
  (allStars: Star[]) => {
  if (allStars) {
    return allStars.find(p => p.id === id);
  } else {
    return null;
  }
});

export const selectStarError: MemoizedSelector<object, any> = createSelector(
  selectStarState,
  getError
);

export const selectStarIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectStarState, getIsLoading
);
