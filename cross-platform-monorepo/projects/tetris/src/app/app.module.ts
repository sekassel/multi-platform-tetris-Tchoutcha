import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameEngineLibModule} from "../../../game-engine-lib/src/lib/game-engine-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameEngineLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
