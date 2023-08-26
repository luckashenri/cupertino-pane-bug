import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-working-test',
  templateUrl: './not-working-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotWorkingTestComponent {

}
