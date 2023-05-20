import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullcalendarComponent } from "./fullcalendar/fullcalendar.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CustomButtonComponent } from "./custom-button/custom-button.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CreateDialogComponent } from "./create-dialog/create-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    FullcalendarComponent,
    CustomButtonComponent,
    CreateDialogComponent,
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [FullcalendarComponent, CustomButtonComponent],
})
export class ComponentsModule {}
