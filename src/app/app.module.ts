import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LiveListComponent } from './views/home/live-list/live-list.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { LiveFormDialogComponent } from './views/home/live-form-dialog/live-form-dialog.component';
// import { InputPropertyComponent } from './studies/input-property/input-property.component';
// import { OutputPropertyComponent } from './studies/output-property/output-property.component';
// import { CicloComponent } from './studies/ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveListComponent,
    LocalDateTimePipe,
    LiveFormDialogComponent// ,
    // InputPropertyComponent,
    // OutputPropertyComponent,
    // CicloComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  providers: [LocalDateTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
