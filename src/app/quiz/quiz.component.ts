import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[];

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private messengerService: MessengerService
    ) { }

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

  getCurrentUrl() {
    this.activatedRoute.url.subscribe(data => {
      console.log({ urlSegmentsFromQuiz: data });
      console.log({ quizActivatedRoute: this.activatedRoute });
      this.messengerService.issueMessage('quiz-component-activated-route', data);
    });
  }

}
