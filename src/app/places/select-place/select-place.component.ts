import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GradeEnum} from "../../models";
import {ModeEnum} from "../../models";

@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.component.html',
  styleUrls: ['./select-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPlaceComponent implements OnInit{

  // TODO: вынести в отдельный тип
  public gradeList!: {label: string, value: string}[]

  // TODO: вынести в отдельный тип
  public modeList!: {label: string, value: string}[]

  constructor() {
  }

  ngOnInit() {
    this.gradeList = Object.keys(GradeEnum).map((key: string) => ({label: key, value: key.toLowerCase()}))
    this.modeList = Object.keys(ModeEnum).map((key: string) => ({label: key, value: key.toLowerCase()}))
  }

}
