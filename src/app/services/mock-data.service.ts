import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private dataUrl = "http://www.mocky.io/v2/5b2971722f00006300f561a9";

  constructor(
    private http:HttpClient
  ) { }

  public loadData():Observable<any> {
    return this.http.get(this.dataUrl);
  }

}
