import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/testcase';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  eventEmitterNotifier: EventEmitter<null> = new EventEmitter();
  notifyAboutChange() {
    this.eventEmitterNotifier.emit();
  }
  p!:number
  f!:number
  s!:number
  isLoaded!:boolean
  constructor(private http: HttpClient) { }

  getAll(query = {}): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getPassed(): Observable<any> {
    return this.http.get(baseUrl+"/passed");
  }
  getSkipped(): Observable<any> {
    return this.http.get(baseUrl+"/skipped");
  }
  getFailed(): Observable<any> {
    return this.http.get(baseUrl+"/failed");
  }




}
