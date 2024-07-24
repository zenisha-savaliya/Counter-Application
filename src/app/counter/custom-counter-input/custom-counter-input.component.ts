import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selector';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  public value: number = 0;
  public name$!: Observable<string>;
  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {
    this.name$ = this.store.select(getName);
  }

  public onAdd(): void {
    this.store.dispatch(customIncrement({ value: this.value }));
  }

  public changeName(): void {
    this.store.dispatch(changeName());
  }
}
