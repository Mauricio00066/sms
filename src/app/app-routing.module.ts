import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'example', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule) },
  { path: 'ejemplo', loadChildren: () => import('./ejemplo/ejemplo.module').then(m => m.EjemploModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
