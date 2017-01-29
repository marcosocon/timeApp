import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeComponent } from './time/time.component';


export const router : Routes = [
	{
	path: '',
	redirectTo: 'dashboard',
	pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'time',
		component: TimeComponent
	}
]

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
