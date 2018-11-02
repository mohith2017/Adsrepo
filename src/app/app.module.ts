import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StaticadsComponent } from './staticads/staticads.component';
import {RouterModule, Router} from '@angular/router';
import { DynamicadsComponent } from './dynamicads/dynamicads.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticadsComponent,
    DynamicadsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'staticads',component:StaticadsComponent},
        {path:'dynamicads',component:DynamicadsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
