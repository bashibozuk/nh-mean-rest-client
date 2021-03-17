import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemoDirective } from './demo.directive';
import { DemoPipe } from './demo.pipe';



@NgModule({
  declarations: [DemoComponent, DemoContainerComponent, DemoDirective, DemoPipe],
  exports: [DemoContainerComponent],
  imports: [
    CommonModule
  ]
})
export class IntroModule { }
