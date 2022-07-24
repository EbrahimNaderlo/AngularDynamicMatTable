import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DynamicMatTableModule, TableIntl } from "dynamic-mat-table";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { DynamicCellComponent } from "./dynamic-cell/dynamic-cell.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { OrderTableComponent } from "./order-table/order-table.component";
import { DynamicExpandCellComponent } from "./dynamic-expand-cell/dynamic-expand-cell.component";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    DynamicMatTableModule,
    MatSliderModule,
    DragDropModule,
    MatTableModule,
    MatIconModule,
    MatInputModule
  ],
  entryComponents: [DynamicCellComponent, DynamicExpandCellComponent],
  declarations: [
    AppComponent,
    DynamicCellComponent,
    OrderTableComponent,
    DynamicExpandCellComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
// https://github.com/mjg123/java-http-clients/blob/master/src/main/java/com/twilio/APOD.java
