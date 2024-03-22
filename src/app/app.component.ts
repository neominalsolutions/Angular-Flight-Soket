import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WebSocketService } from '../services/WebSocketService';
import { FlightState } from './store/reducers/FlightReducers';
import { Store } from '@ngrx/store';
import {
  deleteItem,
  fetchFlightSuccess,
  fetchFlights,
  insertItem,
  updateItem,
} from './store/actions/FlightActions';
import { FlightService } from '../services/FlightService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Angular-Flight-Soket';

  constructor(
    private socketService: WebSocketService,
    private store: Store<FlightState>,
    private flightService: FlightService
  ) {}

  ngOnInit(): void {
    // async veri yükleyip client state aktar.
    this.store.dispatch(fetchFlights());

    // this.flightService.fetchFlights().subscribe({
    //   next: (response: any) => {
    //     this.store.dispatch(fetchFlightSuccess(response));
    //   },
    // });

    this.socketService.socket$.subscribe((response: any) => {
      console.log('socket-data', response);

      if (response.data.flightType === 'arrival') {
        if (response.eventType === 'delete') {
          console.log('delete');
          this.store.dispatch(deleteItem(response.data));
        } else if (response.eventType === 'insert') {
          console.log('insert');
          this.store.dispatch(insertItem(response.data));
        } else if (response.eventType === 'update') {
          console.log('update');
          this.store.dispatch(updateItem(response.data));
        }
      }
    });
  }
}
