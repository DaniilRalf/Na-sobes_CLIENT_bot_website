import {Component, OnInit} from '@angular/core';
import {DevSpecification} from "../../models";
import {FormControl, FormControlStatus, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

interface SelectDataType {
  label: string,
  value: string
}

@Component({
  selector: 'app-select-dev-specific',
  templateUrl: './select-dev-specific.component.html',
  styleUrls: ['./select-dev-specific.component.scss']
})
export class SelectDevSpecificComponent implements OnInit{

  public devSpecificList!: SelectDataType[]

  public myForm!: FormGroup

  public returnDataForm!: {devSpecific: DevSpecification}

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.devSpecificList = Object.keys(DevSpecification).map((key: string) => ({label: key, value: (DevSpecification as any)[key]}))

    this.myForm = new FormGroup({
      devSpecific: new FormControl('', [Validators.required])
    });

    this.myForm.valueChanges.subscribe((nextFormData: FormControlStatus | {devSpecific: DevSpecification}) => {
      this.returnDataForm = <{devSpecific: DevSpecification}>nextFormData
    })
  }

  public onNavigate(): void {
    if (this.returnDataForm?.devSpecific) {
      this.router.navigate([this.returnDataForm?.devSpecific]).then();
    }
  }

}
