import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent {
	user: any = {};
	loading = false;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService) { }

	register() {
		this.loading = true;
		this.authenticationService.signup(this.user.username, this.user.password)
			.subscribe(
			data => {
				// set success message and pass true paramater to persist the message after redirecting to the login page
				this.router.navigate(['/login']);
			},
			error => {
				this.loading = false;
			});
	}
}
