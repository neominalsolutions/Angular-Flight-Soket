import { createAction, props } from '@ngrx/store';
import { FlightState } from '../reducers/FlightReducers';

export const fetchFlights = createAction('[Flight] Fetch');

export const insertItem = createAction('[Flight] Insert', props<any>());
export const updateItem = createAction('[Flight] Update', props<any>());
export const deleteItem = createAction('[Flight] Delete', props<any>());

export const fetchFlightSuccess = createAction(
  '[Flight] Fetch Success',
  props<{ data: any }>()
);

export const fetchFlightError = createAction(
  '[Flight] Fetch Error',
  props<{ data: any }>()
);

export const ApiError = createAction(
  'API_ERROR_ACTION',
  props<{ error: any }>()
);
