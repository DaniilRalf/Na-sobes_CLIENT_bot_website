import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent implements OnInit{

  @Input() inputLabel!: string
  @Input() inputDisabled!: boolean

  constructor() {
  }

  ngOnInit() {
  }

}
