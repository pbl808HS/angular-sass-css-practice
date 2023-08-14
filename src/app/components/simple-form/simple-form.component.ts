import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
 } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
  @Input() dataMessage: any;
  @Output() update = new EventEmitter();
  editMessage = false;
  isMousedown = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick(val: string) {
    this.dataMessage.text = val;
    this.update.emit({data: this.dataMessage});
    this.editMessage = false;
  }
}
