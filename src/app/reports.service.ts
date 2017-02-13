import { Injectable } from '@angular/core';
import { REPORTS } from './mock.reports'
import { Report } from './report';
import * as _ from 'lodash';

@Injectable()
export class ReportsService {

	constructor() { }

	getReports (): Promise<Report[]> {
		return Promise.resolve(REPORTS);
	}

	setReport (report : Report) {
		REPORTS.push(report);
	}

	getReportsFromPeriod (beginDate, finishDate) {
		return _.filter(REPORTS, function(report) {
			return report.date >= beginDate && report.date <= finishDate;
		});
	}
}
