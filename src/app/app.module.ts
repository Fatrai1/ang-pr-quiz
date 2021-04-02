
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { HomeComponent } from './page/home/home.component';
import { NavigationComponent } from './page/navigation/navigation.component';
import { QuizEditorComponent } from './page/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './page/question-editor/question-editor.component';
import { CardComponent } from './common/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SorterPipe,
    AdminComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent,
    QuizEditorComponent,
    QuestionEditorComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }