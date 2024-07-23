import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  public counter$!: Observable<{ counter: number }>;
  private subscription!: Subscription;

  constructor(private store: Store<{ counter: counterState }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
