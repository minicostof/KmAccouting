import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    styleUrls: ['./dashboard.component.scss'],
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    public title: string = 'kmAccouting';

    constructor() {}

    public ngOnInit(): void {}
}
