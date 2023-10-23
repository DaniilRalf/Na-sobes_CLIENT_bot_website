import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JuniorSandbox} from "../../data/frontend-js/junior/juniorSandbox";
import {SandboxDataAnswerType, SandboxDataType} from "../../models";

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

  private actualData!: SandboxDataType[]

  private oldNumberList: number[] = []

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.activeUrl = this.router.url.split('/frontend-js')[1]
    this.getActualQuestion()
  }

  public onNavigate(): void {
    this.router.navigate([
      '/frontend-js',
      'select-place',
    ]).then();
  }

  public onNextQuestion(): void {
    if (this.oldNumberList.length) {
      const randomIndex = Math.floor(Math.random() * this.oldNumberList.length);
      this.activeQuestion = this.actualData[this.oldNumberList[randomIndex] - 1]
      this.oldNumberList.splice(randomIndex, 1)
    } else {
      for (let item = 1; item <= this.actualData.length; item++) {
        this.oldNumberList.push(item)
      }
      this.onNextQuestion()
    }
  }

  private getActualQuestion(): void {
    if (this.activeUrl.includes('junior') && this.activeUrl.includes('sandbox')) {
      this.actualData = JuniorSandbox
      this.onNextQuestion()
    } else  if (this.activeUrl.includes('junior') && this.activeUrl.includes('testing')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('sandbox')) {

    } else if (this.activeUrl.includes('middle') && this.activeUrl.includes('testing')) {

    }
  }


}
