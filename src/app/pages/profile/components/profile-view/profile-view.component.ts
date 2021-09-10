import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Partisan', 'Bi-Partisan'];
  public doughnutChartData: number[] = [20,80];
  chartOptions = {
    responsive: true
  };
  constructor() { }
  ngOnInit(): void {
  }

}
