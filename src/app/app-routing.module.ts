import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MapHigherComponent } from './map-higher/map-higher.component';
import { OriginComponent } from './origin/origin.component';
import { PromisesComponent } from './promises/promises.component'; 

const routes: Routes = [
  {
    path: 'main-page', //main page
    component: MainPageComponent
  },

  {
    path: 'map-higher', //map-higher f(x) pg
    component: MapHigherComponent
  },

  {
    path: 'callbacks', //callbacks page
    component: CallbacksComponent
  },

  {
    path: 'origin', //origin page
    component: OriginComponent
  },

  {
    path: 'promises', //promises page
    component: PromisesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
