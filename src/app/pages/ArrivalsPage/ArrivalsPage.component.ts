import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FlightState } from '../../store/reducers/FlightReducers';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ArrivalsPage',
  templateUrl: './ArrivalsPage.component.html',
  styleUrls: ['./ArrivalsPage.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ArrivalsPageComponent implements OnInit {
  $flightState!: Observable<FlightState>;
  arrivals: any[] = [];

  constructor(private store: Store<{ flightState: FlightState }>) {
    this.$flightState = this.store.select('flightState');
  }

  ngOnInit() {
    this.$flightState.subscribe((state: FlightState) => {
      console.log('arrivals-data', state);
      this.arrivals = [...state.arrivals];
    });
  }
}
