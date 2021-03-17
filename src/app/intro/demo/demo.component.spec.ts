import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    component.input = 15;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should display input value', () => {
    const paragraph: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(paragraph.nativeElement.innerText).toEqual('demo works! This is my input: 15')
  });

  describe('when button is clicked', () => {

    it('then onOutput emits', () => {
      const emitSpy = spyOn(component.onOutput, 'emit').and.callThrough();

      const btn = fixture.debugElement.query(By.css('button'));
      expect(btn).toBeTruthy();
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(emitSpy).toHaveBeenCalled();
    })
  })

});
