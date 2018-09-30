import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'High Score Table';

  score = 0;
  name = '';

  highScores = [
    {
      player: 'Simon',
      score: 120000000
    },
    {
      player: 'Simon',
      score: 110000000
    }
  ];

  addScore() {
    this.highScores.push({
      score: this.score,
      player: this.name
    });
    this.highScores.sort((a, b) => b.score - a.score);
    if (this.highScores.length > 10) this.highScores.length = 10;
  }

  removeScore(index) {
    this.highScores.splice(index, 1);
  }

}
