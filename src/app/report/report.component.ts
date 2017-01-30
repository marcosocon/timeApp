import { Component, OnInit, Input } from '@angular/core';
import { Report } from './../report';

@Component({
	selector: 'report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
	@Input() data: Report[]

	constructor() { }

	ngOnInit() {
	}

}
