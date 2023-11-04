import {Directive} from "@angular/core";
import {Router} from "@angular/router";
import {DevSpecification, GradeEnum, ModeEnum} from "../../models";

@Directive()
export class MainPlace {

  protected activeUrl!: string
  protected activeDevSpecific!: DevSpecification
  protected activeGrade!: GradeEnum
  protected activeMode!: ModeEnum

  constructor(
    public router: Router,
  ) {
  }

  public onNavigateBack(): void {
    this.router.navigate([
      this.activeDevSpecific,
      'select-place',
    ]).then();
  }

  public setActiveConfig(): void {
    this.activeUrl = this.router.url
    if (this.activeUrl.includes(GradeEnum.Junior) && this.activeUrl.includes( this.activeMode)) {
      this.activeGrade = GradeEnum.Junior
    } else if (this.activeUrl.includes(GradeEnum.Middle) && this.activeUrl.includes( this.activeMode)) {
      this.activeGrade = GradeEnum.Middle
    }

    /** get from url dev-specification */
    for (let obj in DevSpecification) {
      if (this.activeUrl.includes((DevSpecification as any)[obj] as string)) {
        this.activeDevSpecific = (DevSpecification as any)[obj]
      }
    }
  }

}
