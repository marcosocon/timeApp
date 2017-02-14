import { Component, OnInit } from '@angular/core';
import { ReportsService } from './../reports.service';
import { Report } from './../report';
import * as _ from 'lodash';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	data: Report[];
	filter = {
		beginDate: '',
		finishDate: ''
	};

	constructor(private _reportsService : ReportsService) { }

	getReports () {
		this._reportsService.getReports()
			.subscribe((data) => this.data = this.sortReports(data, 'date'));
	}

	sortReports (array:Report[], key:string): Report[] {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		}).reverse();
	}

	filterReports(beginDate, finishDate){
		this.data = this._reportsService.getReportsFromPeriod(this.filter.beginDate, this.filter.finishDate);
	}

	ngOnInit() {
		this.getReports();
	}

}
