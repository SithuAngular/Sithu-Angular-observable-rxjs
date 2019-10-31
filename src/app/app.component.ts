import { Component, AfterViewInit } from '@angular/core';
import { timer, of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

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
// const httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };
const apiUrl = 'https://api.myjson.com/bins/119cd8';
// const apiUrl = 'http://localhost:3000/api/v1/products';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sithu-Angular-observable-rxjs';
  // data: any[] = [];
  // constructor(private http: HttpClient) {
    constructor() {
    // myObservable.subscribe(myObserver);
    // sequence.subscribe({
    //   next(msg) { console.log(msg); },
    //   complete() { console.log('Finished Sequence'); }
    // });
    // this.getProducts()
    // .subscribe((res: any) => {
    //   this.data = res;
    //   console.log(this.data);
    // }, err => {
    //   console.log(err);
    // });
  }
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(apiUrl)
  //   .pipe(
  //     tap(product => console.log('fetched products')),
  //     catchError(this.handleError('getProducts', []))
  //   );
  // }

  // getProduct(id: number): Observable<any> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => console.log(`fetched product id=${id}`)),
  //     catchError(this.handleError<any>(`getProduct id=${id}`))
  //   );
  // }
  // fromEvent(target: HTMLInputElement, eventName: string) {
  //   return new Observable((observer) => {
  //     const handler = (e: unknown) => observer.next(e);
  //     target.addEventListener(eventName, handler);
  //     return () => {
  //       target.removeEventListener(eventName, handler);
  //     };
  //   });
  // }

  // ngAfterViewInit() {
  //   const ESC_KEY = 27;
  //   const nameInput = document.getElementById('yourname') as HTMLInputElement;
  //   this.fromEvent(nameInput, 'keydown')
  //   .subscribe((e: KeyboardEvent) => {
  //     // tslint:disable-next-line: deprecation
  //     if (e.keyCode === ESC_KEY) {
  //       nameInput.value = '';
  //     }
  //   });
  // }
}

// function sequenceSubscriber(observer) {
//   observer.next('Apple');
//   observer.next('Orange');
//   observer.next('Grappe');
//   observer.complete();

//   return {unsubscribe() {}};
// }
