import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
	report = {
		description : "",
		time : 0,
		date: null,
		billable : true
	};
	constructor() { }

	submitTimeForm(value) {
		console.log(value);
	}

	ngOnInit() {
	}

}
