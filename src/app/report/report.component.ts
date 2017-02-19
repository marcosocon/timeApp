import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from './../reports.service';
import { Report } from './../report';

@Component({
	selector: 'report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
	@Input() data: Report[]

	constructor(private _reportsService : ReportsService) { }

	deleteReport (id) {
		this._reportsService.delete(id)
			.subscribe( function () { return true } )
	}

	ngOnInit() {
	}

}
