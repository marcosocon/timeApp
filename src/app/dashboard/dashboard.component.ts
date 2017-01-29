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
		this._reportsService.getReports().then(reports => this.data = reports);
	}

	ngOnInit() {
		this.getReports();
	}

}
