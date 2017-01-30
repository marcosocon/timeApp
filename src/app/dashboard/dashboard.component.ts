import { Component, OnInit } from '@angular/core';
import { ReportsService } from './../reports.service';
import { Report } from './../report';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	data: Report[];

	constructor(private _reportsService : ReportsService) { }

	getReports() {
		this._reportsService.getReports().then(reports => this.data = this.sortReports(reports, 'date'));
	}

	sortReports(array:Report[], key:string): Report[] {
		return array.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		}).reverse();
	}

	ngOnInit() {
		this.getReports();
	}

}
