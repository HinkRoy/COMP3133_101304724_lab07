import { NgModule } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { Component } from '@angular/core';
import { UpperCaseDirective } from './upper-case.directive';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; 


import { RemoveSpacesPipe } from './remove-spaces.pipe';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RemoveSpacesPipe,
    UpperCaseDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }