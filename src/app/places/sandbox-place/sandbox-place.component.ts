import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModeEnum, SandboxDataAnswerType, SandboxDataType} from "../../models";
import {take} from "rxjs";
import {HttpService} from "../../helpers/services/http.service";
import {MainPlace} from "../../helpers/directives/main.place";

@Component({
  selector: 'app-sandbox-place',
  templateUrl: './sandbox-place.component.html',
  styleUrls: ['./sandbox-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxPlaceComponent extends MainPlace implements OnInit {

  SandboxDataAnswerType = SandboxDataAnswerType
  countQuestion!: number
  actualQuestion!: SandboxDataType

  private oldQuestionList: number[] = []

  override activeMode = ModeEnum.Sandbox

  constructor(
    private cd: ChangeDetectorRef,
    private httpService: HttpService,
    override router: Router,
  ) {
    super(router);
  }

  ngOnInit() {
    this.setActiveConfig()
    this.getCountQuestions()
  }

  public onNextQuestion(): void {
    if (this.oldQuestionList.length) {
      const randomIndex = Math.floor(Math.random() * this.oldQuestionList.length);
      this.getActualQuestion(this.oldQuestionList[randomIndex])
      this.oldQuestionList.splice(randomIndex, 1)
    } else {
      for (let item = 1; item <= this.countQuestion; item++) {
        this.oldQuestionList.push(item)
      }
      this.onNextQuestion()
    }
  }

  private getCountQuestions(): void {
    this.httpService.getCountQuestion(this.activeDevSpecific, this.activeGrade)
      .pipe(take(1))
      .subscribe((count: number) => {
        if (count) {
          this.countQuestion = count
          this.onNextQuestion()
        }
      })
  }

  private getActualQuestion(questionNumber: number): void {
    this.httpService.getActualQuestion(this.activeDevSpecific, questionNumber, this.activeGrade)
      .pipe(
        take(1),
      ).subscribe((data: SandboxDataType) => {
          this.actualQuestion = data
          this.actualQuestion.answer = JSON.parse(<string>this.actualQuestion.answer).data
          this.cd.detectChanges()
    })
  }


}
