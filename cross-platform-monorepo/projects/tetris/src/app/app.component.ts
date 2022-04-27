import { Component } from '@angular/core';
import { GameEngineLibService} from '../../../game-engine-lib/src/lib/game-engine-lib.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ` 
      <game-board></game-board>
  `,

})
export class AppComponent {
  title = 'tetris';

  constructor(private engineService: GameEngineLibService) {
    console.info(engineService.testing);
  }
}
