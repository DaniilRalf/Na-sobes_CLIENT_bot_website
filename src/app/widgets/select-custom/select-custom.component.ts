import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'el-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss']
})
export class SelectCustomComponent implements OnInit {

  @Input() inputList!: {label: string, value: string}[]

  @Input() inputLabel!: string

  constructor() {
  }

  ngOnInit() {

  }

}
