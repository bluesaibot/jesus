import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService{
  private URL: string = 'http://10.10.0.84:8080/Values';

  constructor(private http: HttpClient) {

  }

  public ValuesAll(): Observable<any>{
    console.log(this.http.get<string>(this.URL));
    return this.http.get(this.URL,  {responseType: 'json'});
  }
}
