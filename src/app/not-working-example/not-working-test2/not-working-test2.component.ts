import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-working-test2',
  templateUrl: './not-working-test2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotWorkingTest2Component {

}
