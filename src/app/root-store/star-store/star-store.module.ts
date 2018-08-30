import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StarStoreEffects } from './effects';
import { reducer } from './reducer';
import { DataService } from '../../services/data.service';
import { StarApiService } from '../../services/star-api.service';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('starFeature', reducer),
    EffectsModule.forFeature([StarStoreEffects])
  ],
  providers: [StarStoreEffects, DataService, StarApiService]
})

export class StarStoreModule { }
