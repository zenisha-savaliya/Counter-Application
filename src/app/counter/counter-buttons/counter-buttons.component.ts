import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  public onIncrement():void{
    this.increment.emit();
  }
  public onDecrement():void{
    this.decrement.emit();
  }
  public onReset():void{
    this.reset.emit();
  }
}
