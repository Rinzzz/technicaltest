import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        zIndex: 9999,
        transform: 'translateY(-90vh)',
        opacity: 1,
      })),
      state('closed', style({
        zIndex: 0,
        transform: 'translateY(-150vh)',
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
    ]),
  ]
})
export class ToastComponent implements OnInit {

  @Input('message') message: string = '';
  isOpen: string = 'closed';
  constructor() { }

  private show() {
    this.isOpen = 'open';
  }

  private hide() {
    this.isOpen = 'closed';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if (changes['message'].currentValue) {
      this.show();
      window.setTimeout(() => this.hide(), 2500);
    }
  }
  ngOnInit(): void {
  }


}
