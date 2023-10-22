import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sandbox-place',
  templateUrl: './sandbox-place.component.html',
  styleUrls: ['./sandbox-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxPlaceComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public onNavigate(): void {
    this.router.navigate([
      '/frontend-js',
      'select-place',
    ]).then();
  }

  public onNextQuestion(): void {

  }

}
