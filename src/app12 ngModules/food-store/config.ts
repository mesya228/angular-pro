import { InjectionToken } from "@angular/core";

export class FoodStoreConfig {
    storeId: string;
    storeToken: string;
}

export const FOOD_STORE_CONFIG = new InjectionToken<FoodStoreConfig>('FOOD_STORE_CONFIG');