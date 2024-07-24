import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, customIncrement } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  public value: number = 0;
  public name: string = '';
  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log('name changes');
      this.name = data.name;
    });
  }

  public onAdd(): void {
    this.store.dispatch(customIncrement({ value: this.value }));
  }

  public changeName(): void {
    this.store.dispatch(changeName());
  }
}
