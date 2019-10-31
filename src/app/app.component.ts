import { Component } from '@angular/core';
import { timer } from 'rxjs';

const source = timer(1000, 2000);
const subscribe = source.subscribe(val => console.log(val));
setTimeout(() => { subscribe.unsubscribe(); }, 10000);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sithu-Angular-observable-rxjs';
  constructor() {
  }
}

function sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();

  return {unsubscribe() {}};
}
