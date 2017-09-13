import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const appRoutes: Routes = [
  { path: 'what-we-do', component: WhatWeDoComponent },

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WhatWeDoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent, WhatWeDoComponent]
})


export class AppModule { }
