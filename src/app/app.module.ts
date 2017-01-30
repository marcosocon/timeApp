//Importing Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
//Importing Routes
import { routes } from './app.routes';
//Importing Services
import { ReportsService } from './reports.service';
//Importing Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeComponent } from './time/time.component';
import { ReportComponent } from './report/report.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		TimeComponent,
		ReportComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		routes,
		MomentModule
	],
	providers: [ReportsService],
	bootstrap: [AppComponent]
})
export class AppModule { }
