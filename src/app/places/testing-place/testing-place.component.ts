import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-testing-place',
  templateUrl: './testing-place.component.html',
  styleUrls: ['./testing-place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingPlaceComponent {

}
