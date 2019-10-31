import { Component, AfterViewInit } from '@angular/core';
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
// const sequence = new Observable(sequenceSubscriber);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Sithu-Angular-observable-rxjs';
  constructor() {
    // myObservable.subscribe(myObserver);
    // sequence.subscribe({
    //   next(msg) { console.log(msg); },
    //   complete() { console.log('Finished Sequence'); }
    // });
  }
  fromEvent(target: HTMLInputElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: unknown) => observer.next(e);
      target.addEventListener(eventName, handler);
      return () => {
        target.removeEventListener(eventName, handler);
      };
    });
  }

  ngAfterViewInit() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('yourname') as HTMLInputElement;
    this.fromEvent(nameInput, 'keydown')
    .subscribe((e: KeyboardEvent) => {
      // tslint:disable-next-line: deprecation
      if (e.keyCode === ESC_KEY) {
        nameInput.value = '';
      }
    });
  }
}

// function sequenceSubscriber(observer) {
//   observer.next('Apple');
//   observer.next('Orange');
//   observer.next('Grappe');
//   observer.complete();

//   return {unsubscribe() {}};
// }
