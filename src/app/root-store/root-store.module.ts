import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StarStoreModule } from './star-store/star-store.module';


@NgModule({
  imports: [
    CommonModule,
    StarStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

  ],
  declarations: []
})
export class RootStoreModule { }
