import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { IPersonne } from "src/app/interfaces/personne.interface";
import pers from "@Mocks/personnes.json";

@Component({
  selector: "app-create-dialog",
  templateUrl: "./create-dialog.component.html",
  styleUrls: ["./create-dialog.component.scss"],
})
export class CreateDialogComponent implements OnInit {
  label: string = "Ajouter";
  formGroup!: FormGroup;
  personnes: IPersonne[] = pers;
  mission!: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<string>,
  ) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      missionName: new FormControl(
        this.mission ? this.mission.title : "",
        Validators.required,
      ),
      startDate: new FormControl(
        this.mission ? this.mission?.start : "",
        Validators.required,
      ),
      endDate: new FormControl(
        this.mission ? this.mission?.end : "",
        Validators.required,
      ),
      color: new FormControl(this.mission ? this.mission?.backgroundColor : ""),
      contributors: new FormControl(
        this.mission ? this.mission?.extendedProps.contributors : "",
        Validators.required,
      ),
      missionDesc: new FormControl(
        this.mission ? this.mission?.extendedProps?.description : "",
        Validators.required,
      ),
    });
  }
}
