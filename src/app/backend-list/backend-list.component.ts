import { Component, OnInit } from '@angular/core';
import { BackendService} from "../backend-service/backend.service";

@Component({
  selector: 'app-backend-list',
  templateUrl: './backend-list.component.html',
  styleUrls: ['./backend-list.component.css']
})
export class BackendListComponent implements OnInit {
  public values: string[] = [];
  public columns: string[] = ['ValueID', 'COValue', 'Temperature', 'Humidity', 'Date', 'SensorID'];

  constructor(backend: BackendService) {
    backend.ValuesAll().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        this.values.push(data[i]);
      }
      console.log(this.values);
    })
  }

  public getTempValues() : number[]{
    let temp: number[] = [];

    for(let i = 0; i < 10; i++){
      temp.push(parseFloat(this.values[i][2]))
    }
    console.log(temp);
    return temp;
  }

  ngOnInit(){

  }

}
