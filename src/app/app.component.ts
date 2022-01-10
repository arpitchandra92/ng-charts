import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';
// import { chart}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ng-charts';
  result : any;
  coinprice : any;
  coinname: any;
  chart: any =[];


  constructor(private service: AuthService){
    Chart.register(...registerables);

  }

  ngOnInit(){
    this.service.cryptoData().then((res)=>{
      this.result = res;
      this.coinprice = this.result.data.coins.map((coins:any)=> coins.price );
      this.coinname = this.result.data.coins.map((coins:any)=>coins.name);
      console.log(this.result);
      console.log(this.coinprice);
      console.log(this.coinname);

      this.chart = new Chart('canvas', {
        type : 'line',
        data: {
          labels: this.coinname,
          datasets: [{
              label: 'coin price',
              data: this.coinprice,
              borderWidth: 3,
              backgroundColor : 'rgba(63,175,89,0.1)',
              borderColor : '#3e95cd',
          }]
      },
      
      });
      

      

    })

  }
}
