import { createReducer, on } from '@ngrx/store';
import {
  deleteItem,
  fetchFlightSuccess,
  insertItem,
  updateItem,
} from '../actions/FlightActions';

export interface FlightState {
  arrivals: any[];
  departures: any[];
}

export const initialState: FlightState = { arrivals: [], departures: [] };

export const flightReducer = createReducer(
  initialState,
  on(insertItem, (state: FlightState, payload: any) => {
    console.log('insert-data', payload);
    const exist = state.arrivals.find((x) => x.id === payload.id);
    console.log('exist', exist);

    if (exist == undefined) {
      console.log('exist', exist);
      const _arrivals = [...state.arrivals, payload]; // yeni bir değişken referans üzerinden state güncelliyoruz.
      // Not state deki her bir nesneyi immutable olarak görürür bu sebeple state üzerinden bir değeri güncellemeye izin vermez
      // state.arrivals = [state.arrivals, payload];
      // return state;

      return {
        ...state,
        arrivals: _arrivals,
      };
    }

    return state;
  }),
  on(updateItem, (state: FlightState, payload: any) => {
    const exist = state.arrivals.find((x) => x.id === payload.id);

    if (exist) { // update işlemi
      const _arrivals = state.arrivals.map((record) => {
        if (record.id === payload.id) {
          console.log('eşit');
          return { ...payload }; // immutable oludğu için {... state} spread ile yeni referan söner.
        } else {
          return { ...record };
        }
      });

      return { ...state, arrivals: _arrivals };
    } else {
      const _arrivals = [...state.arrivals, payload]; // Insert işlemi
      return { ...state, arrivals: _arrivals };
    }
  }),
  on(deleteItem, (state: FlightState, payload: any) => {
    const _arrivals = [...state.arrivals.filter((x) => x.id !== payload.id)];

    return { ...state, arrivals: _arrivals };
  }),
  on(fetchFlightSuccess, (state: FlightState, payload: any) => {
    console.log('data', payload);
    return { ...state, arrivals: payload.data.arrivals };
  })
);
// async olan yapılar için state güncellemek için bir action açıyoruz.

// async olarak tanımlanan durumlarda flight success olduğunda fetchFlightSuccess ile payload aldığın ile client state güncelle
