import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello <span *ngIf="fuck">{{name}}</span></h1><input id="me" type="button" (click)="onClick()" value="..." /><input type="text" (input)="ngOnChanges(event$)" />`,
  styles: [`input[type=text] { margin-left: 10px; font-family: Courier }`]
})
export class HelloComponent implements OnInit  {
  @Input() name: string;
  fuck: boolean;
  thing: number = 0;
  varR: number = 201;
  varG: number = 17;
  varB: number = 11;
  varA: number = 1;
  shit: number; 
  el: HTMLElement;
  bgColor(): string { return `rgb(${this.varR} ${this.varG} ${this.varB})` }
  public constructor() {
  }
  ngOnInit() {
    this.fuck = false;
    this.shit = setInterval(() => {this.fuck = !this.fuck;}, 3000);
    this.el = document.querySelector('hello').parentElement;
  }
  ngOnChanges(event$) {
    this.name = event.target['value'];
    
  }
  onClick() {
    this.thing += 1;
    this.varR = this.varR + 3 > 255 ? 0 : this.varR + 3;
    this.varG = this.varG - 3 < 0 ? 255 : this.varG  - 3;
    this.varB = this.varB + 2 > 255 ? 0 : this.varB + 2;
    console.log(this.bgColor());
    this.el.setAttribute('style',`background-color: ${this.bgColor()}`);
    console.log(this);
  }
}
