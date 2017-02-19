import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeComponent } from './time/time.component';


export const router: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'time',
		canActivate: [AuthGuard],
		component: TimeComponent
	},
	{
		path: '**',
		redirectTo: 'login'
	}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
