import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JuniorSandbox} from "../../data/frontend-js/junior/juniorSandbox";
import {GradeEnum, SandboxDataAnswerType, SandboxDataType} from "../../models";
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

  activeQuestion!: SandboxDataType

  private activeUrl!: string

  private countQuestion!: number

  private actualQuestion!: SandboxDataType[]

  private oldQuestionList: number[] = []

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private httpService: FrontendJsHttpService
  ) {
  }

  ngOnInit() {
    this.activeUrl = this.router.url.split('/frontend-js')[1]


    this.httpService.getCountQuestion(1, GradeEnum.Junior)
      .pipe(
        take(1),
      ).subscribe((count: number) => {
        this.countQuestion = count
        this.getActualQuestion()
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
      this.activeQuestion = this.actualQuestion[this.oldQuestionList[randomIndex] - 1]
      this.oldQuestionList.splice(randomIndex, 1)
    } else {
      for (let item = 1; item <= this.countQuestion; item++) {
        this.oldQuestionList.push(item)
      }
      this.onNextQuestion()
    }
    this.cd.detectChanges()
  }

  private getActualQuestion(): void {
    if (this.activeUrl.includes('junior') && this.activeUrl.includes('sandbox')) {
      this.actualQuestion = JuniorSandbox
      this.onNextQuestion()
    } else  if (this.activeUrl.includes('junior') && this.activeUrl.includes('testing')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('sandbox')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('testing')) {

    }
  }


}
