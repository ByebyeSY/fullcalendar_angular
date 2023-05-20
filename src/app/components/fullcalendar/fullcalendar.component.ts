import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

import { CreateDialogComponent } from "../create-dialog/create-dialog.component";
import { ConfirmationDialogComponent } from "src/app/shared/confirmation-dialog/confirmation-dialog.component";

import { IPersonne } from "src/app/interfaces/personne.interface";

import missions from "@Mocks/missions.json";
import personnes from "@Mocks/personnes.json";

@Component({
  selector: "app-fullcalendar",
  templateUrl: "./fullcalendar.component.html",
  styleUrls: ["./fullcalendar.component.scss"],
})
export class FullcalendarComponent {
  events = missions;

  calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",

    plugins: [dayGridPlugin],
    events: this.events,
  };

  constructor(private dialog: MatDialog) {}

  private refreshData() {
    this.calendarOptions = {
      events: this.events,
    };
  }

  private createUpdateMission(mission: any) {
    this.events = [
      ...this.events,
      {
        title: mission.missionName,
        start: mission.startDate,
        end: mission.endDate,
        color: mission.color,
        extendedProps: {},
        description: mission.missionDesc,
        contributors: mission.contributors,
      },
    ];
    this.refreshData();
  }

  addEvent() {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: "40%",
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.createUpdateMission(res);
      }
    });
  }

  getAvatar(id: number) {
    const avatar = (personnes as IPersonne[]).find(
      (personne) => personne.id === id,
    )?.avatar;
    return `../../assets/avatar/${avatar}`;
  }

  getName(id: any) {
    return (personnes as IPersonne[]).find((personne) => personne.id === id)
      ?.name;
  }

  updateEvent(event: any) {
    console.log(event.backgroundColor);

    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: "40%",
    });
    dialogRef.componentInstance.label = "Modifier";
    dialogRef.componentInstance.mission = event;

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.events = this.events.filter((e: any) => e.title !== event.title);
        this.createUpdateMission(res);
      }
    });
  }

  deleteEvent(event: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.title = event.title;

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.events = this.events.filter((e: any) => e.title !== event.title);
        this.refreshData();
      }
    });
  }

  saveChanges() {
    console.log(this.calendarOptions.events);
  }
}
