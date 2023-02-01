import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { InputtextComponent } from './inputtext/inputtext.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    FirstComponent,
    SecondComponent,
    InputtextComponent

 
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
