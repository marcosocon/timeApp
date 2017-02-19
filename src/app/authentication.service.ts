import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
	apiUrl = "http://localhost:8000";
	constructor(private http: Http) { }

	login(username: string, password: string) {
		return this.http.post(this.apiUrl + '/authenticate', {username: username, password: password})
			.map((response: Response) => {
				// login successful if there's a jwt token in the response
				let user = response.json();

				if (user && user.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			});
	}

	signup(username: string, password: string) {
		return this.http.post(this.apiUrl + '/signup', {username: username, password: password})
			.map((response: Response) => {
				let user = response.json();
			});
	}

	logout() {
		localStorage.removeItem('currentUser');
	}

	isLoggedIn() {
		return localStorage.getItem('currentUser') ? true : false;
	}
}
