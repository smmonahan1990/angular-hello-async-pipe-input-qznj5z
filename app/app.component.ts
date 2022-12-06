import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { enableProdMode } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag$ = new BehaviorSubject<boolean>(true);
  store1$ = new BehaviorSubject<any>({ prop1: "Store1 - Hello", prop2: "Store1 - world" });
  store2$ = new BehaviorSubject<any>({ prop1: "Store2 - Good", prop2: "Store2 - bye" });
  
  setFlag(value) {
    this.flag$.next(value);
  }
}
