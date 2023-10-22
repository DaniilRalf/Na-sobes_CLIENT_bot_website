import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core'
import {MatSelectChange} from "@angular/material/select";
import {GradeEnum, ModeEnum} from "../../models";
import {
  ControlContainer,
  ControlValueAccessor,
  FormGroupDirective,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: 'el-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCustomComponent),
      multi: true
    }
  ]
})
export class SelectCustomComponent implements OnInit, ControlValueAccessor {

  input!: string;

  @Input() inputList!: { label: string, value: string }[]
  @Input() inputLabel!: string
  @Input() formControlName!: string

  @Output() selectionChange = new EventEmitter<ModeEnum | GradeEnum>()

  constructor() {
  }

  ngOnInit() {
  }

  onSelectionChange(data: MatSelectChange): void {
    this.selectionChange.emit(data.value)
  }

  /** implements methods for input elements in custom component */
  onChange: any = () => {
  }
  onTouch: any = () => {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(input: string) {
    this.input = input;
  }

}
