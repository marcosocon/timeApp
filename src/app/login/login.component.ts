import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	user: any = {};
	loading = false;
	returnUrl: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _authenticationService: AuthenticationService) { }

	ngOnInit() {
		// reset login status
		this._authenticationService.logout();

		// get return url from route parameters or default to '/'
		this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/dashboard';
	}

	login() {
		this.loading = true;

		this._authenticationService.login(this.user.username, this.user.password)
			.subscribe(
			data => {
				this._router.navigate([this.returnUrl]);
			},
			error => {
				console.log("There's an error");
				this.loading = false;
			});
	}
}
