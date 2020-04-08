import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plain-textfield',
  templateUrl: './plain-textfield.component.html',
  styleUrls: ['./plain-textfield.component.css']
})
export class PlainTextfieldComponent implements OnInit {
  @Input() width: string; // default width in px
  @Input() placeHolderText = 'Enter your text';
  @Input() value = '';
  @Input() isNotValid = true;
  @Input() validationMessage = "Error in input"
  @Output() keyUpEvent = new EventEmitter();
  @Output() valueChange = new EventEmitter();

  constructor() {  }

  ngOnInit(): void { }

  public onKeyup(event) {
    this.keyUpEvent.emit(event.target.value);
    this.valueChange.emit(event.target.value);
  }

}
