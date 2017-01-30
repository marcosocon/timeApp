import { Injectable } from '@angular/core';
import { REPORTS } from './mock.reports'
import { Report } from './report';

@Injectable()
export class ReportsService {

	constructor() { }

	getReports(): Promise<Report[]> {
		return Promise.resolve(REPORTS);
	}
}
