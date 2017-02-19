import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Report } from './report';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReportsService {
	apiUrl = 'http://localhost:8000/reports';

	constructor(private _http: Http) { }

	get() {
		return this._http.get(this.apiUrl, this.jwt())
			.map(this._processData);
	};

	set(report: Report) {
		return this._http.post(this.apiUrl, report);
	};

	update(id, report: Report) {
		return this._http.put(`${this.apiUrl}/${id}`, report, this.jwt())
			.map((response: Response) => response.json());
	}
	delete(id) {
		return this._http.delete(`${this.apiUrl}/${id}`);
	}

	private _processData(res: Response) {
		let body = res.json();
		return body;
	};

	private jwt() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token) {
			let headers = new Headers({ 'Authorization': 'JWT ' + currentUser.token });
			return new RequestOptions({ headers: headers });
		}
	}

	// getReportsFromPeriod (beginDate, finishDate) {
	// 	return _.filter(REPORTS, function(report) {
	// 		return report.date >= beginDate && report.date <= finishDate;
	// 	});
	// }
}
