import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socketConnection$!: WebSocketSubject<any>;
  public socket$!: Observable<any>; // socket nesnesi ile herhangi bir tipte veri dinleme işlemi yapılıyor

  constructor() {
    this.socketConnection$ = webSocket({
      url: 'ws://localhost:5000',
    });
    this.socket$ = this.socketConnection$.asObservable();
    // message dinlemeye başladık
  }

  send(message: any) {
    console.log('socket sunucusuna mesaj atma');
    this.socketConnection$.next(message);
  }
}
