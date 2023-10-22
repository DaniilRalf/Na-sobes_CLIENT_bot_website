import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GradeEnum, ModeEnum} from "../../models";
import {FormControl, FormControlStatus, FormGroup, Validators} from "@angular/forms";

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

  public gradeList!: SelectDataType[]

  public modeList!: SelectDataType[]

  public myForm!: FormGroup

  private returnDataForm!: ReturnDataFormType

  constructor() {
  }

  ngOnInit() {
    this.gradeList = Object.keys(GradeEnum).map((key: string) => ({label: key, value: key.toLowerCase()}))
    this.modeList = Object.keys(ModeEnum).map((key: string) => ({label: key, value: key.toLowerCase()}))

    this.myForm = new FormGroup({
      grade: new FormControl(GradeEnum.Junior, [Validators.required]),
      mode: new FormControl("", [Validators.required]),
    });

    this.myForm.valueChanges.subscribe((nextFormData: FormControlStatus | ReturnDataFormType) => {
      this.returnDataForm = <ReturnDataFormType>nextFormData
    })
  }

  // selectionChange(data: ModeEnum | GradeEnum): void {
  //   console.log(data)
  //   console.log(this.myForm)
  // }

}
