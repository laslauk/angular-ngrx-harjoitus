import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  StarStoreSelectors
} from './star-store';


export const selectError: MemoizedSelector<object, string> = createSelector(
  StarStoreSelectors.selectStarError,
  (star: string) => {
    return star;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  StarStoreSelectors.selectStarIsLoading,
  (star: boolean) => {
    return star;
  }
);
