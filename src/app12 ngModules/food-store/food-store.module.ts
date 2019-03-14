import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodStoreService } from './food-store.service';

import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const FOOD_PROVIDERS: Provider[] = [
  FoodStoreService
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FoodStoreModule {
  static forRoot(config: FoodStoreConfig): ModuleWithProviders {
    return {
      ngModule: FoodStoreModule,
      providers: [
        FOOD_PROVIDERS,
        {
          provide: FOOD_STORE_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
