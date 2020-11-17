import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapHigherComponent } from './map-higher/map-higher.component';
import { OriginComponent } from './origin/origin.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PromisesComponent,
    CallbacksComponent,
    MapHigherComponent,
    OriginComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
