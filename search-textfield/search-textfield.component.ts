import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-search-textfield",
  templateUrl: "./search-textfield.component.html",
  styleUrls: ["./search-textfield.component.scss"]
})
export class SearchTextfieldComponent implements OnInit {
  @Input() width: any = 385; // default width in px
  @Input() placeHolderText: string = "Enter your text";

  constructor() {}

  ngOnInit(): void {}
}
