import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Report } from './report';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class ReportsService {
	apiUrl = 'http://localhost:8000/api/reports';

	constructor(private _http : Http) { }

	getReports () {
		return this._http.get(this.apiUrl)
			.map(this._processData);
	};

	setReport (report : Report) {
		return this._http.post(this.apiUrl, report);
	};

	deleteReport (id) {
		return this._http.delete(`${this.apiUrl}/${id}`);
	}

	private _processData (res: Response) {
		let body = res.json();
		return body;
	};

	// getReportsFromPeriod (beginDate, finishDate) {
	// 	return _.filter(REPORTS, function(report) {
	// 		return report.date >= beginDate && report.date <= finishDate;
	// 	});
	// }
}
