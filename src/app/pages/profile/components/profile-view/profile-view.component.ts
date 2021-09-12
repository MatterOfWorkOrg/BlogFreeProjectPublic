import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  doughnutChartLabels: string[] = ['Partisan', 'Bi-Partisan'];
  doughnutChartData: number[] = [20,80];
  chartOptions = {
    responsive: true
  };
  rebuttalList :Array<any> = [
    {
      'title':'Article Title 1',
      'config': {
        'order': 1,
        'marginsX':0,
        'marginsY':0
      }
    },
    {
      'title':'Article Title 2',
      'config': {
        'marginsX':0,
          'marginsY':0
      }
    },
    {
      'title':'Article Title 3',
      'config': {
        'order': 3,
        'marginsX':0,
          'marginsY':0
      }
    },
    {
      'title':'Article Title 4',
      'config': {
        'order': 4,
        'marginsX':0,
          'marginsY':0
      }
    },
  ]
  constructor() { }
  ngOnInit(): void {
     this.generateDynamicMargins();
     console.log(this.rebuttalList);
  }
  generateDynamicMargins() {
    this.rebuttalList = this.rebuttalList.map((data:any,index) :any => {
      let marginsX = index*4;
      let marginsY = index*(-4);
        return {
        'title':data.title,
        'config': {
          'order': data.config.order,
          'marginsX':marginsX,
          'marginsY':marginsY
         }
      }
    })
  }
  swipeStack(rebuttal:any) {
    console.log(rebuttal);
  }
}
