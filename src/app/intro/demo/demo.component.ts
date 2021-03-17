import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  @Input()
  input: number = 0;

  @Output()
  onOutput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerOutput(): void {
    console.log('emitting')
    this.onOutput.emit();
  }

}
