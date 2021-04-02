import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService } from 'src/app/service/quiz.service';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quizzes$ = this.quizService.getAll();

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

}
