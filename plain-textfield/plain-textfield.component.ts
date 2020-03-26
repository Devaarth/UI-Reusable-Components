import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-plain-textfield",
  templateUrl: "./plain-textfield.component.html",
  styleUrls: ["./plain-textfield.component.scss"]
})
export class PlainTextfieldComponent implements OnInit {
  @Input() width: any = 331; // default width in px
  @Input() placeHolderText: string = "Enter your text";
  constructor() {}

  ngOnInit(): void {}
}
