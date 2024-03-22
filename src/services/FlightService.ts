import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor() {}

  fetchFlights() {
    console.log('flight-service');
    return of([
      {
        origin: 'sun-express31',
        flightNumber: 'THY-3009',
        flightType: 'arrival',
        id: 1093,
        status: 'on-land',
      },
      {
        origin: 'thy',
        flightNumber: 'SUN-3009',
        flightType: 'arrival',
        id: 1094,
        status: 'delayed',
      },
      {
        origin: 'anadolu-jet',
        flightNumber: 'AND-4001',
        flightType: 'arrival',
        id: 1095,
        status: 'waiting',
      },
    ]);
  }
}
