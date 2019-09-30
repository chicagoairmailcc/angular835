import { TestBed } from '@angular/core/testing';

import { QuizService } from './quiz.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: QuizService = TestBed.get(QuizService);
    expect(service).toBeTruthy();
  });
});
