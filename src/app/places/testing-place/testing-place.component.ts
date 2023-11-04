import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../helpers/services/http.service";
import {DevSpecification, GradeEnum, ModeEnum} from "../../models";
import {MainPlace} from "../../helpers/directives/main.place";

@Component({
  selector: 'app-testing-place',
  templateUrl: './testing-place.component.html',
  styleUrls: ['./testing-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingPlaceComponent extends MainPlace implements OnInit {

  override activeMode = ModeEnum.Testing

  constructor(
    private cd: ChangeDetectorRef,
    private httpService: HttpService,
    override router: Router,
  ) {
    super(router);
  }

  ngOnInit() {
    this.setActiveConfig()
  }

}
