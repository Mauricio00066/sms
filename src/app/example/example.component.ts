import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Update',
                      icon: 'pi pi-refresh',
                      command: () => {
                          // this.update();
                      }
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times',
                      command: () => {
                          // this.delete();
                      }
                  }
              ]
          },
          {
              label: 'Navigate',
              items: [
                  {
                      label: 'Angular',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Router',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]
          }
      ];
  }

}
