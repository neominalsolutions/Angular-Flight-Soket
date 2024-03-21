import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  fetchFlightError,
  fetchFlightSuccess,
  fetchFlights,
} from '../actions/FlightActions';
import { FlightService } from '../../../services/FlightService';

@Injectable()
export class FlightEffects {
  // yeni bir effects oluştur
  // flight servisi git verileri çek
  // ver çekerken bir hata yoksa successAction'a yönlendir fetchFlightSuccess
  // veri çekerken bir hata varsa fail action'a yönlendir.
  loadFlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchFlights),
      switchMap(() =>
        // araya girilen işlemi flightService devret.
        this.flightService.fetchFlights().pipe(
          map((response) =>
            fetchFlightSuccess({ data: { arrivals: response } })
          ),
          catchError((err: any) => of(fetchFlightError(err)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flightService: FlightService
  ) {}
}
