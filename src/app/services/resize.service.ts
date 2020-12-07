import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { IRetiroProg } from '../model/hbl';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private isMobile = new Subject();
  public screenMobile: boolean;
  public displaySideB = new Subject();

  constructor(private http: HttpClient) {
    this.checkWidth();
  }

  onMobileChange(status: boolean, status2: boolean) {
    this.isMobile.next(status);
    this.displaySideB.next(status2);
  }

  getMobileStatus(): Observable<any> {
    return this.isMobile.asObservable();
  }

  getTableStatus(): Observable<any> {
    return this.displaySideB.asObservable();
  }

  public checkWidth() {
    const width = window.innerWidth;
    if (width <= 479) {
      this.onMobileChange(true, false);
    } else if (width <= 991) {
      this.screenMobile = true;
      this.onMobileChange(true, true);
    } else {
      this.screenMobile = false;
      this.onMobileChange(false, false);
    }
  }

  getRetiroP() {
    return this.http
      .get<any>('assets/json/retiro.json')
      .toPromise()
      .then((res) => <IRetiroProg[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
