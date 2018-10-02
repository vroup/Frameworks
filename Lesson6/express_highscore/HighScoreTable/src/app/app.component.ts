import {Component, Injectable} from '@angular/core';
import {HighScoresService, IHighScore} from './highscores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'High Score Table';
  score = 0;
  name = '';

  highScores: IHighScore[] = [
    {name: 'John Doe', score: 0}
  ];
  private error: any;

  constructor(private highScoreService: HighScoresService) {
    this.highScores = highScoreService.highScores;
  }

  getHighScores() {
    return this.highScoreService.highScores;
  }
}
