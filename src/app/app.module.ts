import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeComponent } from './time/time.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		TimeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		routes
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
