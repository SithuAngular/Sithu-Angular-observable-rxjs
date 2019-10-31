import { Component } from '@angular/core';
import { timer, of, Observable } from 'rxjs';

// const source = timer(1000, 2000);
// const subscribe = source.subscribe(val => console.log(val));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);

// const myObservable = of('apple', 'orange', 'grappe');
// const myObserver = {
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.log('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };
const sequence = new Observable(sequenceSubscriber);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sithu-Angular-observable-rxjs';
  constructor() {
    // myObservable.subscribe(myObserver);
    sequence.subscribe({
      next(msg) { console.log(msg); },
      complete() { console.log('Finished Sequence'); }
    });
  }
}

function sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();

  return {unsubscribe() {}};
}
