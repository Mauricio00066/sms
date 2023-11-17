import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule,ButtonDirective,ButtonTemplates, Button } from 'primeng/button';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    MenubarModule, 
    MenuModule,
    ButtonModule,
    TableModule
   ]
})
export class PrimeNGModule { }
