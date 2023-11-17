import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { Button, ButtonDirective } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent, 
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNGModule,
    
    

  ]
})
export class HomeModule { }
