/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
	let component: TimeComponent;
	let fixture: ComponentFixture<TimeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TimeComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TimeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
