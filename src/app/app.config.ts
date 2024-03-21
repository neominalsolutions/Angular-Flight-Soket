import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { flightReducer } from './store/reducers/FlightReducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { FlightEffects } from './store/effects/FlightEffects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // store tanımı yap
    provideStore({
      flightState: flightReducer,
    }), // devTools aktif et
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideEffects([FlightEffects]),
    // efectsleri dizi olarak göster
  ],
};
