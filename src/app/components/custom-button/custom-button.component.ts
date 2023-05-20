import { Component, Input } from "@angular/core";

@Component({
  selector: "app-custom-button",
  templateUrl: "./custom-button.component.html",
  styleUrls: ["./custom-button.component.scss"],
})
export class CustomButtonComponent {
  @Input() title: string = "Click";
  @Input() color: string = "white";
  @Input() bgColor: string = "#2966A2";
  @Input() iconName!: string;
}
