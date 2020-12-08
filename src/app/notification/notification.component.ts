import { Component, Input, OnInit } from '@angular/core';
import { INotification } from '../model/hbl';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input('notification') notificacion: INotification;
  @Input('closable') closable: boolean = true;
  @Input('show') show: boolean = true;
  //show: boolean = true;



  constructor() { }

  ngOnInit(): void {
    //this.show = false;

  }

  closeNotificacion() {
    this.notificacion = {
      type: '',
      message: [{mensaje:''}],
      show: false
     }
    //this.show = false;
  }
}
