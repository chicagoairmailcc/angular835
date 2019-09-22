import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz() {
    this.quizService.get().subscribe(
      result => {
        this.quizzes = result;
        for (const x of this.quizzes) {
          console.log(x.id);
        }
      }
    );
  }

}
