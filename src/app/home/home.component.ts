import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Campain } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}
  campains!: Campain[];

  ngOnInit() {
    this.campains = [
      {
        code: 6543,
        title: 'Promocion',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 7646,
        title: 'Aplicacion',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 1356,
        title: 'Subscripcion',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 8976,
        title: 'Recargar',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 1769,
        title: 'Recargar',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 18997,
        title: 'Backtone',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 43648,
        title: 'Ringtone',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 8946,
        title: '',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 16546,
        title: '',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
      {
        code: 4654,
        title: '',
        sender: '+1654654165',
        list_type: 'text',
        initial_date: '20/11/2023',
        final_date: '30/11/2023',
        total_msg: 500,
        msg_sent: 80,
        state: 'On process',
      },
    ];
  }
}
