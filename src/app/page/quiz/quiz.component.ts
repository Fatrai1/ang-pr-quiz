  
import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
  
  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new Quiz());
      }
      return this.quizService.get((params.id));
    })
  );

  actives: string[] = ['true', 'false'];

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  updating: boolean = false;

  onUpdate(form: NgForm, quiz: Quiz): void {
    if (quiz.id === 0) {
      this.quizService.create(quiz);
    } else {
      this.updating = true;
      this.quizService.update(quiz);
    }
    this.router.navigate(['admin'])
  }
}