import { Component, OnInit} from '@angular/core';
import { ChartType, ChartData } from 'chart.js';
import { Subscription} from 'rxjs';
import { TestService } from '../test.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {


  public myData:ChartData = {
    labels: [
      'Réussis',
      'Sautés',
      'Echoués'
    ],


    datasets: [{
      data: [this.tsv.p,this.tsv.s,this.tsv.f],
      backgroundColor: [
        'rgb(0, 255, 0)',
        'rgb(255, 255, 0)',
        'rgb(255, 0, 0)'
      ],

    }]
  };

  public myType:ChartType = 'doughnut';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  notifierSubscription: Subscription = this.tsv.eventEmitterNotifier.subscribe(notified => {
    // originator has notified me. refresh my data here.
    console.log("notified! refreshing...")
    console.log("p :"+this.tsv.p)
    console.log("s :"+this.tsv.s)
    console.log("f :"+this.tsv.f)
    this.myData.datasets[0].data = [this.tsv.p,this.tsv.s,this.tsv.f]
    Chart.getChart("myChartId")?.update()
  });

  constructor(private tsv: TestService) { }

  ngOnInit(): void {

  }


  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }


  getBool():boolean{
    if(!this.tsv.isLoaded){
      console.log("not yet possible")
      console.log("")
      console.log("p :"+this.tsv.p)
      console.log("s :"+this.tsv.s)
      console.log("f :"+this.tsv.f)
      console.log("bool p :"+!!this.tsv.p)
      console.log("bool s :"+!!this.tsv.s)
      console.log("bool f :"+!!this.tsv.f)
      this.tsv.isLoaded = (!!this.tsv.p)&&(!!this.tsv.s)&&(!!this.tsv.f)
      console.log("inside getBool isLoaded :"+this.tsv.isLoaded)
      if(this.tsv.isLoaded){this.myData.datasets[0].data = [this.tsv.p,this.tsv.s,this.tsv.f]}
  }else{
    this.myData.datasets[0].data = [this.tsv.p,this.tsv.s,this.tsv.f]
    }
    return this.tsv.isLoaded;

  }



}
