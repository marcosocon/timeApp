//Importing Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './authentication.service';

//Importing Routes
import { routes } from './app.routes';
//Importing Services
import { ReportsService } from './reports.service';
//Importing Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeComponent } from './time/time.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		TimeComponent,
		ReportComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routes,
		MomentModule,
		NgbModule.forRoot()
	],
	providers: [
		AuthenticationService,
		AuthGuard,
		ReportsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
