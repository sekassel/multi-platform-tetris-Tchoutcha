import { NgModule } from '@angular/core';
//import { GameEngineLibComponent } from './game-engine-lib.component';
import { BoardComponent } from './components/board/board.component';



import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule], // Contains the basic Angular directives (i.e. NgIf, NgForOf etc) 
  exports: [BoardComponent],
})
export class GameEngineLibModule { }
