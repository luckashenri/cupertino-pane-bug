import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-working-test',
  templateUrl: './working-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkingTestComponent {

}
