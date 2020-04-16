import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { ToastrService } from "../app/files/toastr.service";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
