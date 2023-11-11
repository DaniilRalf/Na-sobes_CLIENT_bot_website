import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DevSpecification, GradeEnum, ModeEnum} from "../../models";
import {FormControl, FormControlStatus, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

interface ReturnDataFormType {
  grade: GradeEnum,
  mode: ModeEnum,
}

interface SelectDataType {
  label: string,
  value: string
}

@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.component.html',
  styleUrls: ['./select-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPlaceComponent implements OnInit{

  telegramPlatform = (window as any).Telegram.WebApp.platform

  gradeList!: SelectDataType[]

  modeList!: SelectDataType[]

  myForm!: FormGroup

  returnDataForm!: ReturnDataFormType

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.gradeList = Object.keys(GradeEnum)
      .map((key: string) => ({label: key, value: key.toLowerCase()}))
    this.modeList = Object.keys(ModeEnum)
      .map((key: string) => ({label: key === 'Testing' ? 'Testing(в разработке)' : key, value: key.toLowerCase()}))

    this.myForm = new FormGroup({
      grade: new FormControl(GradeEnum.Junior, [Validators.required]),
      mode: new FormControl("", [Validators.required]),
    });

    this.myForm.valueChanges.subscribe((nextFormData: FormControlStatus | ReturnDataFormType) => {
      this.returnDataForm = <ReturnDataFormType>nextFormData
    })
  }

  public onNavigate(): void {
    const activeUrl = this.router.url
    let activeDevSpecific
    for (let obj in DevSpecification) {
      if (activeUrl.includes((DevSpecification as any)[obj] as string)) {
        activeDevSpecific = (DevSpecification as any)[obj]
      }
    }
    if (this.returnDataForm?.mode && this.returnDataForm?.grade && activeDevSpecific) {
      this.router.navigate([
        `/${activeDevSpecific}`,
        this.returnDataForm.grade,
        `${this.returnDataForm.mode}-place`
      ]).then();
    }
  }

  public onBackNavigate(): void {
    this.router.navigate(['select-dev-specific']).then()
  }

}
