import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DevSpecification, GradeEnum, ModeEnum, SandboxDataAnswerType, SandboxDataType} from "../../models";
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
  private activeDevSpecific!: string
  private activeGrade!: GradeEnum
  private activeMode!: ModeEnum

  public countQuestion!: number

  public actualQuestion!: SandboxDataType

  private oldQuestionList: number[] = []


  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private httpService: FrontendJsHttpService
  ) {
  }

  ngOnInit() {
    this.activeUrl = this.router.url
    this.setActiveConfig()


    this.httpService.getCountQuestion(this.activeGrade)
      .pipe(
        take(1),
      ).subscribe((count: number) => {
        this.countQuestion = count
        this.onNextQuestion()
      })
  }

  public onNavigate(): void {
    this.router.navigate([
      this.activeDevSpecific,
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
    this.httpService.getActualQuestion(questionNumber, this.activeGrade)
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
    } else  if (this.activeUrl.includes(GradeEnum.Junior) && this.activeUrl.includes('testing')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes(ModeEnum.Sandbox)) {
      this.activeMode = ModeEnum.Sandbox
      this.activeGrade = GradeEnum.Middle
    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('testing')) {

    }

    /** get from url dev-specification */
    for (let obj in DevSpecification) {
      if (this.activeUrl.includes((DevSpecification as any)[obj] as string)) {
        this.activeDevSpecific = (DevSpecification as any)[obj]
      }
    }
  }


}
