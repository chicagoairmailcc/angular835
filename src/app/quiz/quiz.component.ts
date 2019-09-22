import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quizService.get().subscribe(
      result => {
        for (const x of result) {
          console.log(x.id);
        }
      }
    );
  }

}
