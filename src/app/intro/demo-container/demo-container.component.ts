import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss']
})
export class DemoContainerComponent implements OnInit {

  value = 1;

  outputCount = 0;

  constructor(private service: DemoService) { } // constructor(val) {this.val = val}

  ngOnInit(): void {
    this.service.getValue().subscribe(v => this.value);
  }

  onOutput() {
    this.outputCount++;
  }

  increaseInput() {
    this.service.setValue(this.value++);
  }
}
