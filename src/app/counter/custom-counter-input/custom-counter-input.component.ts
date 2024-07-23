import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { count } from 'rxjs';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  public value: number = 0;

  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {}

  public onAdd(): void {
    this.store.dispatch(customIncrement({ value: this.value }));
  }
}
