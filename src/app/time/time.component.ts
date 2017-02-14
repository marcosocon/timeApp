import { Component, OnInit } from '@angular/core';
import { ReportsService } from './../reports.service';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
	report;
	errorMessage;
	constructor(private _reportsService : ReportsService) { }

	submitTimeForm(report) {
		if (report && report.time && report.description && report.date) {
			this._reportsService.setReport(report)
				.subscribe(function(res) {return true});
			this.setNullValues();
		}
	}

	setNullValues() {
		this.report = {
			description : "",
			time : 0,
			date: null,
			billable : true
		};
	}

	ngOnInit() {
		this.setNullValues();
	}

}
