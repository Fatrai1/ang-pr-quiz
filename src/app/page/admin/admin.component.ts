import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quizzes$ = this.quizService.getAll();
  phrase = '';
  columnKey: string = '';



  constructor(
    private quizService: QuizService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(key: string): void {
    this.columnKey = key;
  }

  onDelete(quiz: Quiz): void {
    if (!confirm("Are you sure?")) {
      return;
    }
    this.quizService.remove(quiz).subscribe(
      () => location.reload()
    );
  }
}
