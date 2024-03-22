import { createAction, props } from '@ngrx/store';
import { FlightState } from '../reducers/FlightReducers';

export const insertItem = createAction('[Flight] Insert', props<any>());
export const updateItem = createAction('[Flight] Update', props<any>());
export const deleteItem = createAction('[Flight] Delete', props<any>());

export const fetchFlights = createAction('[Flight] Fetch');

// asenkron veri çekme işleminde success yada error olabiliriz nasıl ki react-redux da pending, fullfilled, rejected statlerine göre dinleme işlemi yaptıkyasak burada ise apidan çekilen veriler async olduğunda bir hata meydana gelmiş olabilir. 

export const fetchFlightSuccess = createAction(
  '[Flight] Fetch Success',
  props<{ data: any }>()
);

export const fetchFlightError = createAction(
  '[Flight] Fetch Error',
  props<{ data: any }>()
);
