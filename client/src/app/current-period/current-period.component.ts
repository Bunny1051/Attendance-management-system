import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-period',
  templateUrl: './current-period.component.html',
  styleUrls: ['./current-period.component.css']
})
export class CurrentPeriodComponent implements OnInit {
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
