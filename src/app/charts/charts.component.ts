import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {BackendService} from "../backend-service/backend.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit{
  public values: string[] = [];
  public columns: string[] = ['ValueID', 'COValue', 'Temperature', 'Humidity', 'Date', 'SensorID'];

  constructor(private backend: BackendService) {
  }

  public getTempValues() : number[]{
    let temp: number[] = [];

    for(let i = 0; i < this.values.length; i++){
      temp.push(parseFloat(this.values[i][2]))
    }
    return temp;
  }

  public getCO2Values(): number[]{
    let temp: number[] = [];

    for(let i = 0; i < this.values.length; i++){
      temp.push(parseInt(this.values[i][1]))
    }
    return temp;
  }

  public getHumidityValues(): number[]{
    let temp: number[] = [];

    for(let i = 0; i < this.values.length; i++){
      temp.push(parseFloat(this.values[i][3]))
    }
    return temp;
  }

  public getDateValues(): string[]{
    let temp: string[] = [];
    for(let i = 0; i < this.values.length; i++){
      temp.push(new Date(Date.parse(this.values[i][4])).toString().slice(0, 15));
    }
    return temp;
  }

  ngOnInit(): void {
    // initializing the backend in a array
    this.backend.ValuesAll().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.values.push(data[i]);
      }
      this.initCharts();
    })
  }

  public initCharts(): void{
    type EChartsOption = echarts.EChartsOption;

    //CO2 Chart
    var chartDom = document.getElementById('chart1')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    var xZoomEnd = this.values.length;
    option = {
      color: ['#80FFA5'],
      title: {
        text: 'CO2-Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['CO2']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.getDateValues()
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          smooth: false,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: this.getCO2Values()
        }
      ],
      dataZoom: [
        {
          show: false,
          start: 0,
          end: xZoomEnd
        },
        {
          type: 'inside',
          start: 94,
          end: 100
        },
        {
          show: false,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 30,
          height: '80%',
          showDataShadow: false,
          left: '93%'
        }
      ]
    };
    option && myChart.setOption(option);


    //Temperature Chart
    var chartDom = document.getElementById('chart2')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      color: ['#00DDFF'],
      title: {
        text: 'Temperature-Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Temperature']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.getDateValues()
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Temperature',
          type: 'line',
          stack: 'Total',
          smooth: false,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgba(77, 119, 255)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: this.getTempValues()
        }
      ],
      dataZoom: [
        {
          show: false,
          start: 0,
          end: xZoomEnd
        },
        {
          type: 'inside',
          start: 94,
          end: 100
        },
        {
          show: false,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 30,
          height: '80%',
          showDataShadow: false,
          left: '93%'
        }
      ]
    };

    option && myChart.setOption(option);

    //Humidity Chart
    var chartDom = document.getElementById('chart3')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      color: ['#37A2FF'],
      title: {
        text: 'Humidity-Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Humidity']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.getDateValues()
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Humidity',
          type: 'line',
          stack: 'Total',
          smooth: false,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(55, 162, 255)'
              },
              {
                offset: 1,
                color: 'rgba(116, 21, 219)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: this.getHumidityValues()
        }
      ],
      dataZoom: [
        {
          show: false,
          start: 0,
          end: xZoomEnd
        },
        {
          type: 'inside',
          start: 94,
          end: 100
        },
        {
          show: false,
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 30,
          height: '80%',
          showDataShadow: false,
          left: '93%'
        }
      ]
    };

    option && myChart.setOption(option);
  }
}
