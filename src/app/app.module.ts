import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { SizerDirective } from './directives/sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DirectivesComponent,
    SizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
