  
import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Question } from '../../model/question';
import { QuestionService } from 'src/app/service/question.service';
import { Quiz } from '../../model/quiz';
import { QuizService } from 'src/app/service/quiz.service';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions$ = this.questionService.getAll();
  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap(params => {
      return this.quizService.get(params.id);
    })
  );
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}