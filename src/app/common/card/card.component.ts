import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() quiz: Quiz = new Quiz();
  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }

}
