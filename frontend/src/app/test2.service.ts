import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/tests';
const runUrl = 'http://localhost:8080/api/run';
@Injectable({
  providedIn: 'root'
})
export class Test2Service {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  getTest(id: string): Observable<Object> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createTest(test: Object): Observable<Object> {
    return this.http.post(`${baseUrl}` + `/create`, test);
  }

  runTest(): Observable<any>  {
    console.log("running test");
    return this.http.get(runUrl);
  }

  updateTest(id: string, value: any): Observable<Object> {
    return this.http.put(`${baseUrl}/${id}`, value);
  }

  deleteTest(id: string): Observable<Object> {
    console.log(`${baseUrl}/${id}`);
    return this.http.delete(`${baseUrl}/${id}`,{responseType: 'text'});
  }




}
