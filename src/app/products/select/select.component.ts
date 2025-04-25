import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() categories: any = [];
  @Output() selected = new EventEmitter();

  change(event:any) {
    this.selected.emit(event)
  }
}
