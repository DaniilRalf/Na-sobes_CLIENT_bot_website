import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GradeEnum, ModeEnum, SandboxDataAnswerType, SandboxDataType} from "../../models";
import {FrontendJsHttpService} from "../../pages/frontend-js/lib/frontend-js.http.service";
import {take} from "rxjs";

@Component({
  selector: 'app-sandbox-place',
  templateUrl: './sandbox-place.component.html',
  styleUrls: ['./sandbox-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxPlaceComponent implements OnInit {

  SandboxDataAnswerType = SandboxDataAnswerType

  private activeUrl!: string

  public countQuestion!: number
  private activeMode!: ModeEnum
  private activeGrade!: GradeEnum

  public actualQuestion!: SandboxDataType

  private oldQuestionList: number[] = []


  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private httpService: FrontendJsHttpService
  ) {
  }

  ngOnInit() {
    this.activeUrl = this.router.url.split('/frontend-js')[1]


    this.httpService.getCountQuestion(GradeEnum.Junior)
      .pipe(
        take(1),
      ).subscribe((count: number) => {
        this.countQuestion = count
        this.setActiveConfig()
      })
  }

  public onNavigate(): void {
    this.router.navigate([
      '/frontend-js',
      'select-place',
    ]).then();
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

  private getActualQuestion(questionNumber: number): void {
    this.httpService.getActualQuestion(questionNumber, GradeEnum.Junior)
      .pipe(
        take(1),
      ).subscribe((data: SandboxDataType) => {
          this.actualQuestion = data
          this.actualQuestion.answer = JSON.parse(<string>this.actualQuestion.answer).data
          this.cd.detectChanges()
    })
  }

  private setActiveConfig(): void {
    if (this.activeUrl.includes(GradeEnum.Junior) && this.activeUrl.includes(ModeEnum.Sandbox)) {
      this.activeMode = ModeEnum.Sandbox
      this.activeGrade = GradeEnum.Junior
      this.onNextQuestion()
    } else  if (this.activeUrl.includes(GradeEnum.Junior) && this.activeUrl.includes('testing')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes(ModeEnum.Sandbox)) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('testing')) {

    }
  }


}
